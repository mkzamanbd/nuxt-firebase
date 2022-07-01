<template>
    <div class="container px-6 mx-auto grid">
        <div class="py-6 flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Notification <span v-if="isLoaded">({{ notifications.length }})</span>
            </h2>
            <div v-if="isLoaded" class="flex space-x-2">
                <button v-if="notificationIds.length > 0" type="button" class="border rounded p-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 hover:bg-purple-600 hover:border-purple-600 hover:text-white" @click="deleteSelectedNotification">Delete Selected {{ notificationIds.length > 0 ? `(${notificationIds.length})` : '' }}</button>
                <input v-model="searchItem" class="w-72 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray" placeholder="Search">
            </div>
        </div>
        <!-- content body -->
        <div class="w-full overflow-y-auto h-100vh border dark:border-0 border-gray-200">
            <div class="relative overflow-x-auto">
                <table v-if="isLoaded" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th class="px-4 py-3">
                                <input v-model="allSelectedNotification" type="checkbox" class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white dark:bg-gray-800 checked:text-purple-600 focus:ring-0 checked:border-purple-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer" @click="selectAllNotification">
                            </th>
                            <th class="px-4 py-3">SL</th>
                            <th class="px-4 py-3">From</th>
                            <th class="px-4 py-3">TxnID</th>
                            <th class="px-4 py-3">Title</th>
                            <th class="px-4 py-3" style="width: 40%">Text</th>
                            <th class="px-4 py-3">Created At</th>
                            <th class="px-4 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(notification, index) in sortedNotifications" :key="notification.id" class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <td class="px-4 py-4">
                                <input v-model="notificationIds" :value="notification.id" type="checkbox" class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white dark:bg-gray-800 checked:text-purple-600 focus:ring-0 checked:border-purple-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer" @change="selectNotification">
                            </td>
                            <th class="px-4 py-3">{{ (index + 1) }}</th>
                            <td class="px-4 py-3">{{ notification.app_name }}</td>
                            <td class="px-4 py-3" @click="editTrxId(notification)">
                                <div v-if="editableRow.id == notification.id">
                                    <input v-model="editableRow.transaction_id" type="text" class="text-sm leading-6 rounded-md ring-1 ring-slate-900/10 dark:ring-0 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"  @keydown.enter="updateTrxId" />
                                </div>
                                <span v-else>{{ notification.transaction_id }}</span>
                            </td>
                            <td class="px-4 py-3">{{ notification.android_title }}</td>
                            <td class="px-4 py-3">{{ notification.android_text }}</td>
                            <td class="px-4 py-3">{{ notification.created_at }}</td>

                            <td class="px-4 py-3">
                                <div class="space-x-2 flex">
                                    <button type="button" class="flex items-center justify-center" @click="deleteNotification(notification)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill fill-red-500" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-else class="dark:text-white text-center px-4 py-3">
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
            sortedNotifications(){
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                return this.notifications.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                })
            },
        },
    
        mounted(){
            // get data on firebase database
            this.$fire.database.ref('notifications').on('value', (snapshot) => {
                this.notifications = []
                snapshot.forEach((child) => {                    
                    this.notifications.push({
                        id: child.key,
                        ...child.val(),
                    });
                });
                this.isLoaded = true;
            })
        },

        methods:{
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
        height: calc(100vh - 200px);
    }
</style>
