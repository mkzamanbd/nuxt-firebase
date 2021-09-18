<template>
    <div class="container mt-3">
        <!-- table -->
        <div class="card border-0">
            <div class="card-header d-flex align-items-center justify-content-between px-0">
                <h4 class="main-title">Contacts List</h4>   
                
                <div>
                    <a href="#" class="btn btn-info btn-sm" title="Print" onclick="window.print()">
                        <i class="bi bi-printer"></i>
                    </a>
                    
                    <nuxt-link to="/contacts/create" class="btn btn-success btn-sm">
                        <i class="bi bi-plus-circle"></i>
                    </nuxt-link>
                </div>
            </div>
            <!-- content body -->
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table v-if="isLoaded" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th class="print-none text-center">
                                    <span class="hover:show">
                                        Action
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(contact, index) in contacts" :key="index">
                                <th scope="row">{{ index + 1}}</th>
                                <td>{{ contact.data().name }}</td>
                                <td>{{ contact.data().phone }}</td>

                                <td class="print-none text-center">
                                    <div class="hover:show">
                                        <nuxt-link :to="`/contacts/edit/${contact.id}`" class="btn btn-sm btn-warning">
                                            <i class="bi bi-pencil-square"></i>
                                        </nuxt-link>
                                        <button type="button" class="btn btn-sm btn-danger" @click.prevent="deleteContact(contact)">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-else>
                        <b-skeleton-table :rows="10" :columns="4" :table-props="{ bordered: true, striped: true }"></b-skeleton-table>
                    </div>
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