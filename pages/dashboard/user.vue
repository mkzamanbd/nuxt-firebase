<template>
    <div class="container px-6 mx-auto grid">
        <div class="py-6 flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                User <span v-if="isLoaded">(Total {{ filteredUsers.length }} of {{ filterItems.length }}) - Page {{ page }}</span>
            </h2>
            <div v-if="isLoaded" class="flex space-x-2">
                <button v-if="userIds.length > 0" type="button" class="border rounded p-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 hover:bg-purple-600 hover:border-purple-600 hover:text-white" @click="deleteSelectedUser">Delete Selected {{ userIds.length > 0 ? `(${userIds.length})` : '' }}</button>
                <div class="flex items-center space-x-1">
                    <button type="button" class="flex items-center text-sm p-2 text-gray-500 dark:bg-gray-700 dark:text-gray-100 bg-gray-300 rounded-md hover:bg-purple-400 hover:text-white" @click="prevPage">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Previous
                    </button>
                    <button type="button" class="flex items-center text-sm p-2 text-gray-500 dark:bg-gray-700 dark:text-gray-100 bg-gray-300 rounded-md hover:bg-purple-400 hover:text-white" @click="nextPage">
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
                <select id="par-page" v-model="rowsPerPage" class="text-sm border rounded appearance-none dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray" @change="page = 1">
                    <option value="20" selected>20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                    <option :value="filteredUsers.length">All Users</option>
                </select>
                <input v-model="searchItem" class="w-72 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray" placeholder="Search">
            </div>
        </div>
        <!-- content body -->
        <div class="w-full overflow-y-auto h-100vh rounded-lg shadow-xs border border-gray-200 dark:border-gray-700">
            <div class="w-full overflow-x-auto">
                <table v-if="isLoaded" class="w-full whitespace-no-wrap">
                    <thead>
                        <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th class="px-4 py-3">
                                <input v-model="allSelectedUser" type="checkbox" class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white dark:bg-gray-800 checked:text-purple-600 focus:ring-0 checked:border-purple-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer" @click="selectAllUser">
                            </th>
                            <th class="px-4 py-3">SL</th>
                            <th class="px-4 py-3">ID</th>
                            <th class="px-4 py-3">Detail</th>
                            <th class="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr v-for="(user, index) in filterItems" :key="index" class="text-gray-700 dark:text-gray-400">
                            <td class="px-4 py-4">
                                <input v-model="userIds" :value="user.id" type="checkbox" class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white dark:bg-gray-800 checked:text-purple-600 focus:ring-0 checked:border-purple-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer" @change="selectUser">
                            </td>
                            <th class="px-4 py-3">{{ index + 1 }}</th>
                            <td class="px-4 py-3">{{ user.id }}</td>
                            <td class="px-4 py-3">{{ user }}</td>

                            <td class="px-4 py-3">
                                <div class="space-x-2 flex">
                                    <button type="button" class="flex items-center justify-center h-8 w-8 rounded leading-5 ripple bg-purple-500 text-white" @click="editUser(user)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                    <button type="button" class="flex items-center justify-center h-8 w-8 rounded leading-5 ripple bg-red-500 text-white" @click="deleteUser(user)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-else class="dark:text-white text-center px-4 py-3">
                    Loading...
                    <div v-for="item in 10" :key="item" class="animate-pulse grid gap-4 grid-cols-5 mb-3">
                        <div class="h-8 bg-gray-200 rounded"></div>
                        <div class="h-8 bg-gray-300 rounded"></div>
                        <div class="h-8 bg-gray-200 rounded"></div>
                        <div class="h-8 bg-gray-300 rounded"></div>
                        <div class="h-8 bg-gray-200 rounded"></div>
                    </div>
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
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime</span>
                                        <input v-model="editableUserData.data.customer.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime</span>
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
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime</span>
                                        <input v-model="editableUserData.data.employee.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime</span>
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
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime</span>
                                        <input v-model="editableUserData.data.menu.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime</span>
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
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime</span>
                                        <input v-model="editableUserData.data.notification.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime</span>
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
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime</span>
                                        <input v-model="editableUserData.data.orderHistory.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime</span>
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
                                        <span class="text-gray-700 dark:text-gray-400">lastModifiedTime</span>
                                        <input v-model="editableUserData.data.territory.lastModifiedTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>

                                <div class="md:w-1/2">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">lastReadTime</span>
                                        <input v-model="editableUserData.data.territory.lastReadTime" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                                    </label>
                                </div>
                            </div>
                        </div>

                    </main>
                    <footer class="flex justify-end border-t border-gray-300 dark:border-gray-700">
                        <div class="px-4 py-2">
                            <button type="button" class="border rounded p-2 dark:border-gray-600 dark:bg-gray-700 hover:bg-purple-600 hover:border-purple-600 hover:text-white" @click="updateUserData">Update</button>
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
                editableUserData: null,
                page: 1,
                rowsPerPage: 20,
                isDropdownOpen: false,
            }
        },
        computed: {
            filteredUsers(){
                return this.users.filter((user) => {
                    return user.id.includes(this.searchItem)
                })
            },
            filterItems() {
                const start = this.page * this.rowsPerPage - this.rowsPerPage;
                const end = start + this.rowsPerPage - 1;

                return this.filteredUsers.filter((item, index) => index >= start && index <= end);
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
            prevPage(){
                if(this.page > 1){
                    this.page--;
                }
            },
            nextPage(){
                // get total page
                const totalPage = Math.ceil(this.filteredUsers.length / this.rowsPerPage);
                if(this.page < totalPage){
                    this.page++;
                    console.log(totalPage, this.page);
                }
            },
            editUser(user){
                this.isEditModalOpen = true;
                this.editableUserData = user;
            },
            updateUserData(){
                if(confirm('Are you sure?\nYou want to update this user data')){
                    this.$fire.database.ref('users/' + this.editableUserData.id).set(this.editableUserData.data)
                    this.$toast.success(`User successfully Updated, User ID: ${this.editableUserData.id}`);
                    this.isEditModalOpen = false;
                }
            },
            selectAllUser() {
                this.userIds = [];
                if (this.allSelectedUser) {
                    this.allSelectedUser = false;
                }
                else{
                    this.filterItems.forEach((user) => {
                        this.userIds.push(user.id.toString());
                    })
                }
            },
            selectUser() {
                this.filterItems.length === this.userIds.length ? this.allSelectedUser = true : this.allSelectedUser = false
            },
            async deleteUser(user){
                if(confirm('Are you sure?\nYou want to delete selected user')){
                    await this.$fire.database.ref('users/' + user.id).remove();
                    this.$toast.success(`User successfully deleted, User ID: ${user.id}`);
                }
            },
            deleteSelectedUser(){
                if(this.userIds.length > 0){
                    if(confirm(`Are you sure?\nYou want to delete selected ${this.userIds.length} user`)){
                        this.userIds.forEach((userId, index) => {
                            console.log(`%cDeleting... ${index + 1}, User ID:  ${userId}`, 'background: red; color: white;');
                            this.$fire.database.ref('users/' + userId).remove();
                            console.log(`%cDeleted ${index + 1}`, 'background: green; color: white;');
                        });
                        this.$toast.success(`Total ${this.userIds.length } user successfully deleted`);
                        this.userIds = [];
                        this.allSelectedUser = false;
                    }
                }
                else{
                    alert('Please select user first');
                }
            },
        }
    }
</script>
<style scoped>
    .h-100vh{
        height: calc(100vh - 150px);
    }
</style>