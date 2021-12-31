<template>
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Contacts List
        </h2>
        <!-- content body -->
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs border border-gray-200 dark:border-gray-700">
            <div class="w-full overflow-x-auto">
                <table v-if="isLoaded" class="w-full whitespace-no-wrap">
                    <thead>
                        <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th class="px-4 py-3">ID</th>
                            <th class="px-4 py-3">Name</th>
                            <th class="px-4 py-3">Phone</th>
                            <th class="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr v-for="(contact, index) in contacts" :key="index" class="text-gray-700 dark:text-gray-400">
                            <th class="px-4 py-3">{{ index + 1 }}</th>
                            <td class="px-4 py-3">{{ contact.data().name }}</td>
                            <td class="px-4 py-3">{{ contact.data().phone }}</td>

                            <td class="px-4 py-3">
                                <div class="flex space-x-2">
                                    <nuxt-link :to="`/contacts/edit/${contact.id}`" class="flex items-center justify-center h-8 w-8 rounded leading-5 ripple bg-blue-500 text-white">
                                        <span class="material-icons">edit</span>
                                    </nuxt-link>
                                    <button type="button" class="flex items-center justify-center h-8 w-8 rounded leading-5 ripple bg-red-600 text-white" @click.prevent="deleteContact(contact)">
                                        <span class="material-icons">delete</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-else class="dark:text-white p-12 text-center">
                    Loading...
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                contacts: [],
                isLoaded: false
            }
        },
        head:{
            title: 'Contacts List'
        },
        mounted(){
            this.loadContacts()
        },

        methods:{
            reloadContacts(){
                this.$fire.firestore.collection("contacts").onSnapshot((querySnapshot) => {
                    this.contacts = []
                    querySnapshot.forEach((doc) => {
                        this.contacts.push(doc)
                    });
                });
            },
            async loadContacts(){
                await this.$fire.firestore.collection('contacts').get().then((querySnapshot) => {
                    this.contacts = querySnapshot.docs;
                    this.isLoaded = true
                }).catch((error) =>{
                    console.log(error)
                })
            },

            deleteContact(contact){
                // delete contact

                if(confirm('Are You Sure?')){
                    // delete image form storage
                    if(contact.data().image){
                        this.$fire.storage.refFromURL(contact.data().image).delete().then(function(){
                            console.log('delete image')
                        }).catch( (error) =>{
                            console.log(error)
                        });
                    }

                    this.$fire.firestore.collection("contacts").doc(contact.id).delete().then((response) => {
                        this.$toast.success('Document successfully deleted.')
                        console.log("Document successfully deleted!");
                        this.loadContacts()
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    });
                }

            }
        }
    }
</script>
<style scoped>
    .hover\:show{
        opacity: 0;
        transition: .3s;
    }
    .hover\:show:hover{
        opacity: 1;
    }
</style>