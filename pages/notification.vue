<template>
    <div class="container px-6 mx-auto grid">
        <div class="py-6 flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Notification <span v-if="isLoaded">(Total {{ notifications.length }} of {{ notifications.length }}) - Page {{ page }}</span>
            </h2>
            <div v-if="isLoaded" class="flex space-x-2">
                <button v-if="notificationIds.length > 0" type="button" class="border rounded p-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 hover:bg-purple-600 hover:border-purple-600 hover:text-white" @click="deleteSelectedNotification">Bulk Delete {{ notificationIds.length > 0 ? `(${notificationIds.length})` : '' }}</button>
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
                                <input v-model="allSelectedNotification" type="checkbox" class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white dark:bg-gray-800 checked:text-purple-600 focus:ring-0 checked:border-purple-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer" @click="selectAllNotification">
                            </th>
                            <th class="px-4 py-3">SL</th>
                            <th class="px-4 py-3">Title(android.title)</th>
                            <th class="px-4 py-3">Text(android.text)</th>
                            <th class="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr v-for="notification in notifications" :key="notification.id" class="text-gray-700 dark:text-gray-400">
                            <td class="px-4 py-4">
                                <input v-model="notificationIds" :value="notification.id" type="checkbox" class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white dark:bg-gray-800 checked:text-purple-600 focus:ring-0 checked:border-purple-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer" @change="selectNotification">
                            </td>
                            <th class="px-4 py-3">{{ notification.id }}</th>
                            <td class="px-4 py-3">{{ notification.data.android_title }}</td>
                            <td class="px-4 py-3">{{ notification.data.android_text }}</td>

                            <td class="px-4 py-3">
                                <div class="space-x-2 flex">
                                    <button type="button" class="flex items-center justify-center h-8 w-8 rounded leading-5 ripple bg-purple-500 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                    <button type="button" class="flex items-center justify-center h-8 w-8 rounded leading-5 ripple bg-red-500 text-white" @click="deleteUser(notification)">
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
            }
        },
    
        mounted(){
            // get data on firebase database
            this.$fire.database.ref('notifications').on('value', (snapshot) => {
                this.notifications = []
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();
                    
                    this.notifications.push({
                        id: childKey,
                        data: childData
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
            async deleteUser(notification){
                if(confirm('Are you sure?\nYou want to delete selected user')){
                    await this.$fire.database.ref('notifications/' + notification.id).remove();
                    this.$toast.success(`User successfully deleted, User ID: ${notification.id}`);
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
        height: calc(100vh - 150px);
    }
</style>