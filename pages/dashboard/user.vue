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
                                    <button type="button" class="flex items-center justify-center h-8 w-8 rounded leading-5 ripple bg-purple-500 text-white" @click="editUser(user)">
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
        <!-- edit modal -->
        <div v-if="isEditModalOpen" class="fixed inset-0 w-full h-full z-40 backdrop-blur bg-black/10 dark:bg-black/20 duration-300 overflow-y-auto">
            <div class="relative sm:w-3/4 md:w-1/2 lg:w-1/2 mx-2 sm:mx-auto my-20 opacity-100 shadow-sm">
                <div class="relative bg-white shadow-lg rounded-lg text-gray-900 dark:text-gray-100 dark:bg-gray-800 z-20">
                    <header class="border-b border-gray-300 dark:border-gray-700">
                        <div class="px-4 py-2 flex justify-between items-center">
                            <p>User ID: {{editableUserData.id}}</p>
                            <!-- Remove header if you don't want a close icon. Use modal body to place modal tile. -->
                            <button type="button" class="border border-gray-300 dark:border-gray-700 rounded p-0.5 text-xs" @click="isEditModalOpen = false">Close</button>
                        </div>
                    </header>
                    <main class="px-4 py-2 max-h-96 overflow-hidden overflow-y-auto">
                        <div class="grid gap-4 md:grid-cols-2">
                            <div class="mb-2">
                                <label class="block text-sm">
                                    <span class="text-gray-700 dark:text-gray-400 font-bold">All Territory</span>
                                    <input v-model="editableUserData.data.allTerritory" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                </label>
                            </div>

                            <div class="mb-2">
                                <label class="block text-sm">
                                    <span class="text-gray-700 dark:text-gray-400 font-bold">isPasswordUpdate</span>
                                    <input v-model="editableUserData.data.isPasswordUpdate" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                </label>
                            </div>

                            <div class="mb-2">
                                <label class="block text-sm">
                                    <span class="text-gray-700 dark:text-gray-400 font-bold">Notice</span>
                                    <input v-model="editableUserData.data.notice" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                </label>
                            </div>
                            <div class="mb-2">
                                <label class="block text-sm">
                                    <span class="text-gray-700 dark:text-gray-400 font-bold">Offer</span>
                                    <input v-model="editableUserData.data.offer" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                </label>
                            </div>
                            <div class="mb-2">
                                <label class="block text-sm">
                                    <span class="text-gray-700 dark:text-gray-400 font-bold">Product</span>
                                    <input v-model="editableUserData.data.product" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                </label>
                            </div>
                        </div>

                        <hr class="border-1 mb-2">

                        <div class="mb-2">
                            <p class="font-bold text-gray-700 dark:text-gray-400">Customer</p>
                            <div class="flex w-full space-x-4">
                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime ({{ formattedTime(editableUserData.data.customer.lastModifiedTime) }})</span>
                                        <input v-model="editableUserData.data.customer.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime ({{ formattedTime(editableUserData.data.customer.lastReadTime) }})</span>
                                        <input v-model="editableUserData.data.customer.lastReadTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-2">
                            <p class="font-bold text-gray-700 dark:text-gray-400">Employee</p>
                            <div class="flex w-full space-x-4">
                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime ({{ formattedTime(editableUserData.data.employee.lastModifiedTime) }})</span>
                                        <input v-model="editableUserData.data.employee.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime ({{ formattedTime(editableUserData.data.employee.lastReadTime) }})</span>
                                        <input v-model="editableUserData.data.employee.lastReadTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div class="mb-2">
                            <p class="font-bold text-gray-700 dark:text-gray-400">Menu</p>
                            <div class="flex w-full space-x-4">
                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime ({{ formattedTime(editableUserData.data.menu.lastModifiedTime) }})</span>
                                        <input v-model="editableUserData.data.menu.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime ({{ formattedTime(editableUserData.data.menu.lastReadTime) }})</span>
                                        <input v-model="editableUserData.data.menu.lastReadTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-2">
                            <p class="font-bold text-gray-700 dark:text-gray-400">Notification</p>
                            <div class="flex w-full space-x-4">
                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime ({{ formattedTime(editableUserData.data.notification.lastModifiedTime) }})</span>
                                        <input v-model="editableUserData.data.notification.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime ({{ formattedTime(editableUserData.data.notification.lastReadTime) }})</span>
                                        <input v-model="editableUserData.data.notification.lastReadTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>
                            </div>
                        </div>

                        
                        <div class="mb-2">
                            <p class="font-bold text-gray-700 dark:text-gray-400">Order History</p>
                            <div class="flex w-full space-x-4">
                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime ({{ formattedTime(editableUserData.data.orderHistory.lastModifiedTime) }})</span>
                                        <input v-model="editableUserData.data.orderHistory.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime ({{ formattedTime(editableUserData.data.orderHistory.lastReadTime) }})</span>
                                        <input v-model="editableUserData.data.orderHistory.lastReadTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-2">
                            <p class="font-bold text-gray-700 dark:text-gray-400">Territory</p>
                            <div class="flex w-full space-x-4">
                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime ({{ formattedTime(editableUserData.data.territory.lastModifiedTime) }})</span>
                                        <input v-model="editableUserData.data.territory.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime ({{ formattedTime(editableUserData.data.territory.lastReadTime) }})</span>
                                        <input v-model="editableUserData.data.territory.lastReadTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>
                            </div>
                        </div>

                    </main>
                    <footer class="flex justify-end border-t border-gray-300 dark:border-gray-700">
                        <div class="px-4 py-2">
                            <button type="button">Update</button>
                        </div>
                    </footer>
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
                isEditModalOpen: false,
                editableUserData: {},
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
            formattedTime(time){
                if(time === null || time === '' || time === undefined || time === 0){
                    return '-';
                }
                else {
                    return new Date(time).toLocaleString();
                }
                    
            },
            editUser(user){
                this.isEditModalOpen = true;
                this.editableUserData = user;
            },
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