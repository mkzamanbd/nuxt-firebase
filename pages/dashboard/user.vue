<template>
    <div class="container mt-3">
        <!-- table -->
        <div class="card border-0">
            <div class="card-header d-flex align-items-center justify-content-between px-0">
                <h4 class="main-title">User List</h4>   
                
                <div>
                    <a href="#" class="btn btn-info btn-sm" title="Print" onclick="window.print()">
                        <i class="bi bi-printer"></i>
                    </a>
                </div>
            </div>
            <!-- content body -->
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table v-if="isLoaded" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Details</th>
                                <th class="print-none text-center">
                                    <span class="hover:show">
                                        Action
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users" :key="index">
                                <th scope="row">{{ index + 1}}</th>
                                <td>{{ user }}</td>

                                <td class="print-none text-center">
                                    <div class="hover:show">
                                        <a href="/user/edit/100" class="btn btn-sm btn-warning">
                                            <i class="bi bi-pencil-square"></i>
                                        </a>
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
            return {
                users: [],
                isLoaded: false
            }
        },
        mounted(){
            // get data on firebase database
            this.$fire.database.ref('users').on('value', (snapshot) => {
                this.users = snapshot.val();
                this.isLoaded = true;
                console.log(snapshot.val())
            })

        },
    }
</script>

<style lang="scss" scoped>

</style>