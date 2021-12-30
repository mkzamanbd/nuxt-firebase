<template>
    <div class="container px-6 mx-auto grid">
        <div class="my-6 flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                User({{ filteredUsers.length }})
            </h2>
            <div class="flex">
                <button type="button" class="mr-4 border rounded p-2 dark:border-gray-600 dark:bg-gray-700 hover:bg-purple-600 hover:border-purple-600 hover:text-white" @click="deleteSelectedUser">Bulk Delete</button>
                <input v-model="searchItem" class="block w-72 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray" placeholder="Search">
            </div>
        </div>
        <!-- content body -->
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs border border-gray-200 dark:border-gray-700">
            <div class="w-full overflow-x-auto">
                <table v-if="isLoaded" class="w-full whitespace-no-wrap">
                    <thead>
                        <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th scope="col" class="px-4 py-3">
                                <input v-model="allSelectedUser" type="checkbox" class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white dark:bg-gray-800 checked:text-purple-600 focus:ring-0 checked:border-purple-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer" @click="selectAllUser">
                            </th>
                            <th class="px-4 py-3">SL</th>
                            <th class="px-4 py-3">ID</th>
                            <th class="px-4 py-3">Detail</th>
                            <th class="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr v-for="(user, index) in filteredUsers" :key="index" class="text-gray-700 dark:text-gray-400">
                            <td class="px-4 py-4">
                                <input v-model="userIds" :value="user.id" type="checkbox" class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white dark:bg-gray-800 checked:text-purple-600 focus:ring-0 checked:border-purple-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer" @change="selectUser">
                            </td>
                            <th class="px-4 py-3">{{ index + 1 }}</th>
                            <td class="px-4 py-3">{{ user.id }}</td>
                            <td class="px-4 py-3">{{ user }}</td>

                            <td class="px-4 py-3">
                                <div class="space-x-2 flex">
                                    <button type="button" class="flex items-center justify-center h-8 w-8 rounded leading-5 ripple bg-blue-500 text-white">
                                        <span class="material-icons">edit</span>
                                    </button>
                                    <button type="button" class="flex items-center justify-center h-8 w-8 rounded leading-5 ripple bg-red-500 text-white" @click="deleteUser(user)">
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
            return {
                users: [],
                isLoaded: false,
                searchItem: '',
                allSelectedUser: false,
                userIds: [],
            }
        },
        computed: {
            filteredUsers(){
                return this.users.filter((user) => {
                    return user.id.includes(this.searchItem)
                })
            }
        },
        mounted(){
            // get data on firebase database
            this.$fire.database.ref('users').on('value', (snapshot) => {
                this.users = []
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();
                    
                    this.users.push({
                        id: childKey,
                        data: childData
                    });
                });
                this.isLoaded = true;
            })
        },
        methods:{
            selectAllUser() {
                this.userIds = [];
                if (this.allSelectedUser) {
                    this.allSelectedUser = false;
                }
                else{
                    this.filteredUsers.forEach((user) => {
                        this.userIds.push(user.id.toString());
                    })
                }
            },
            selectUser() {
                this.filteredUsers.length === this.userIds.length ? this.allSelectedUser = true : this.allSelectedUser = false
            },
            async deleteUser(user){
                if(confirm('Are you sure?\nYou want to delete selected user')){
                    await this.$fire.database.ref('users/' + user.id).remove();
                    this.$toast.success(`User are successfully Deleted, User ID: ${user.id}`);
                }
            },
            deleteSelectedUser(){
                if(this.userIds.length > 0){
                    if(confirm('Are you sure?\nYou want to delete selected user')){
                        this.userIds.forEach((userId) => {
                            console.log(`%cDeleting... User ID:  ${userId}`, 'background: red; color: white;');
                            this.$fire.database.ref('users/' + userId).remove();
                            console.log('%cDeleted', 'background: green; color: white;');
                            this.$toast.success(`User are successfully Deleted, User ID: ${userId}`);
                        })
                    }
                }
                else{
                    alert('Please select user first');
                }
            },
        }
    }
</script>