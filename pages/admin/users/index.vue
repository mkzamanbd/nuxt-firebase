<template>
    <div>
        <!-- sidebar -->
        <AsideComponent/>
        <!-- End sidebar -->

        <!-- page-aside-layer -->
        <PageAsideLayer/>


        <div class="mainbar">
            <!-- HeaderComponent -->
            <HeaderComponent/>

            <!-- table -->
            <div class="container mt-5">
                <div class="table-responsive">
                    <table class="table custom-table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Date</th>
                                <th scope="col">Supplier</th>
                                <th scope="col">Voucher No</th>
                                <th scope="col" class="text-end">Total</th>
                                <th scope="col" class="text-end">Paid</th>
                                <th scope="col" class="print-none text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">01.</th>
                                <td>23 August, 2020</td>
                                <td class="text-">Abcd</td>
                                <td><a href="#">545484</a></td>
                                <td class="text-end">5,000.00</td>
                                <td class="text-end">0.00</td>
                                <td class="print-none text-end">
                                    <a href="#" class="btn table-small-button" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <a href="#" class="btn table-small-button" title="Return">
                                        <i class="bi bi-arrow-counterclockwise"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">02.</th>
                                <td>23 August, 2020</td>
                                <td class="text-">Abcd</td>
                                <td><a href="#">545484</a></td>
                                <td class="text-end">5,000.00</td>
                                <td class="text-end">0.00</td>
                                <td class="print-none text-end">
                                    <a href="#" class="btn table-small-button" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <a href="#" class="btn table-small-button" title="Return">
                                        <i class="bi bi-arrow-counterclockwise"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">03.</th>
                                <td>23 August, 2020</td>
                                <td class="text-">Abcd</td>
                                <td><a href="#">545484</a></td>
                                <td class="text-end">5,000.00</td>
                                <td class="text-end">0.00</td>
                                <td class="print-none text-end">
                                    <a href="#" class="btn table-small-button" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <a href="#" class="btn table-small-button" title="Return">
                                        <i class="bi bi-arrow-counterclockwise"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">04.</th>
                                <td>23 August, 2020</td>
                                <td class="text-">Abcd</td>
                                <td><a href="#">545484</a></td>
                                <td class="text-end">5,000.00</td>
                                <td class="text-end">0.00</td>
                                <td class="print-none text-end">
                                    <a href="#" class="btn table-small-button" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <a href="#" class="btn table-small-button" title="Return">
                                        <i class="bi bi-arrow-counterclockwise"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">05.</th>
                                <td>23 August, 2020</td>
                                <td class="text-">Abcd</td>
                                <td><a href="#">545484</a></td>
                                <td class="text-end">5,000.00</td>
                                <td class="text-end">0.00</td>
                                <td class="print-none text-end">
                                    <a href="#" class="btn table-small-button" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <a href="#" class="btn table-small-button" title="Return">
                                        <i class="bi bi-arrow-counterclockwise"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="4" class="text-end">Total</th>
                                <th class="text-end border-start">5,000.00</th>
                                <th class="text-end">0.00</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

export default {
    head:{
        title: 'Users List'
    },
    middleware:['auth']
}
</script>

<style lang="scss" scoped>

</style>