<template>
    <div class="container px-6 mx-auto grid sm:overflow-auto">
        <div class="py-6 flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Notification
            </h2>
            <div v-if="isLoaded" class="flex space-x-2">
                <button v-if="notificationIds.length > 0" type="button" class="border rounded p-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 hover:bg-purple-600 hover:border-purple-600 hover:text-white" @click="deleteSelectedNotification">Delete Selected {{ notificationIds.length > 0 ? `(${notificationIds.length})` : '' }}</button>
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
                    <option :value="notifications.length">All</option>
                    <option value="20" selected>20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                </select>
                <input v-model="searchItem" class="w-72 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray" placeholder="Search">
            </div>
        </div>
        <!-- content body -->
                
        <div class="w-full">
            <div
                class="rounded-lg shadow-xs border border-gray-200 dark:border-gray-700"
            >
                <div class="w-full overflow-y-auto h-100vh">
                    <table class="w-full overflow-auto">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                            >
                                <th width="4%" class="px-4 py-3 flex items-center">
                                    <input v-model="allSelectedNotification" type="checkbox" class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white dark:bg-gray-800 checked:text-purple-600 focus:ring-0 checked:border-purple-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer" @click="selectAllNotification">
                                    <span class="ml-4">SL</span>
                                </th>
                                <th class="px-4 py-3">Client</th>
                                <th class="px-4 py-3">Transaction ID</th>
                                <th class="px-4 py-3">Message</th>
                                <th class="px-4 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            <tr v-for="(notification) in filterItems" :key="notification.id" class="text-gray-700 dark:text-gray-400">
                                <td width="4%" class="px-4 py-3 flex items-center">
                                    <input v-model="notificationIds" :value="notification.id" type="checkbox" class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white dark:bg-gray-800 checked:text-purple-600 focus:ring-0 checked:border-purple-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer" @change="selectNotification">
                                    <span class="ml-4">{{ notification.count }}</span>
                                </td>
                                <td class="px-4 py-3">
                                    <div class="flex items-center text-sm">
                                        <div>
                                            <p class="font-semibold">{{ notification.android_title }}</p>
                                            <p class="text-xs text-gray-600 dark:text-gray-400">
                                                {{ notification.app_name }}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-xs" @click="editTrxId(notification)">
                                    <div v-if="editableRow.id == notification.id">
                                        <input v-model="editableRow.transaction_id" type="text" class="text-sm leading-6 rounded-md ring-1 ring-slate-900/10 dark:ring-0 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"  @keydown.enter="updateTrxId" />
                                    </div>
                                    <span v-else class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">{{ notification.transaction_id }}</span>
                                </td>
                                <td class="px-4 py-3 text-xs">
                                    <span>
                                        {{ notification.android_text }}
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm">{{ notification.created_at }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                >
                    <span class="flex items-center col-span-3"> Showing Last {{ filterItems.length }} of {{ notifications.length }} </span>
                    <span class="col-span-2"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                notifications: [],
                isLoaded: false,
                searchItem: '',
                allSelectedNotification: false,
                notificationIds: [],
                isEditModalOpen: false,
                editableUserData: null,
                page: 1,
                rowsPerPage: 20,
                isDropdownOpen: false,
                editableRow: {}
            }
        },

        computed: {
            filterItems() {
                const start = this.page * this.rowsPerPage - this.rowsPerPage;
                const end = start + this.rowsPerPage - 1;

                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                return this.notifications.sort((item1, item2) => {
                    return new Date(item2.created_at) - new Date(item1.created_at);
                }).filter((item, index) => {
                    return index >= start && index <= end
                });
            }
        },
    
        mounted(){
            // get data on firebase database
            this.$fire.database.ref('notifications').on('value', (snapshot) => {
                this.notifications = []
                let count = parseInt(snapshot.numChildren())
                snapshot.forEach((child) => {                    
                    this.notifications.push({
                        id: child.key,
                        count: count--,
                        ...child.val(),
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
                const totalPage = Math.ceil(this.notifications.length / this.rowsPerPage);
                if(this.page < totalPage){
                    this.page++;
                    console.log(totalPage, this.page);
                }
            },
            selectAllNotification() {
                this.notificationIds = [];
                if (this.allSelectedNotification) {
                    this.allSelectedNotification = false;
                }
                else{
                    this.notifications.forEach((user) => {
                        this.notificationIds.push(user.id.toString());
                    })
                }
            },
            selectNotification() {
                this.notifications.length === this.notificationIds.length ? this.allSelectedNotification = true : this.allSelectedNotification = false
            },
            async deleteNotification(notification){
                if(confirm('Are you sure?\nYou want to delete selected user')){
                    await this.$fire.database.ref('notifications/' + notification.id).remove();
                    this.$toast.success(`User successfully deleted, User ID: ${notification.id}`);
                }
            },

            editTrxId(notification){
                this.editableRow = notification;
                console.log(notification);
            },
            async updateTrxId(){
                if(confirm(`Are you sure?\nYou want to update this trx id`)){
                    await this.$fire.database.ref(`notifications/${this.editableRow.id}`).update({
                        transaction_id: this.editableRow.transaction_id
                    });
                    this.$toast.success(`Trx ID successfully updated, ID: ${this.editableRow.transaction_id}`);
                    this.editableRow = {};
                }
            },

            deleteSelectedNotification(){
                if(this.notificationIds.length > 0){
                    if(confirm(`Are you sure?\nYou want to delete selected ${this.notificationIds.length} user`)){
                        this.notificationIds.forEach((userId, index) => {
                            console.log(`%cDeleting... ${index + 1}, User ID:  ${userId}`, 'background: red; color: white;');
                            this.$fire.database.ref('notifications/' + userId).remove();
                            console.log(`%cDeleted ${index + 1}`, 'background: green; color: white;');
                        });
                        this.$toast.success(`Total ${this.notificationIds.length } user successfully deleted`);
                        this.notificationIds = [];
                        this.allSelectedNotification = false;
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
        height: calc(100vh - 300px);
    }
</style>
