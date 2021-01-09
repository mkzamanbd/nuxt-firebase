<template>
    <div>
        <div class="user-list">
            <div class="container print-none">
                <ul class="nav nav-tabs mt-2">
                    <li class="nav-item">
                        <nuxt-link class="nav-link active" to="/admin/employee">All Records</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/admin/employee/create">New Entry</nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="container">
                <!-- table -->
                <div class="card border-0">
                    <div class="card-header p-0 d-md-flex align-items-center border-0  d-block">
                        <!-- page title -->
                        <div class="mt-3 mb-2">
                            <h4 class="main-title">Purchase records</h4><br>
                            <small class="print-none">About 563,000,000 results (0.98 seconds)</small>
                        </div>
                        <!-- Print -->
                        <a href="#" class="btn top-icon-button print-none ms-auto" title="Print" onclick="window.print()">
                            <i class="bi bi-printer"></i>
                        </a>
                        <!-- refresh -->
                        <a href="purchase_records.html" class="btn top-icon-button print-none" title="Refresh">
                            <i class="bi bi-arrow-clockwise"></i>
                        </a>
                        <!-- add -->
                        <a href="purchase_entry.html" class="btn top-icon-button print-none" title="Creat new purchase">
                            <i class="bi bi-plus-circle"></i>
                        </a>
                    </div>
                    <!-- content body -->
                    <div class="card-body p-0">
                        <!-- search collapse -->
                        <div class="collapse print-none" id="purchase-search">
                            <div class="card card-body rounded-0 border-0 px-0">
                                <!-- search form -->
                                <form action="#">
                                    <div class="row gy-1 gx-3">
                                        <!-- Date (from) -->
                                        <div class="col-12 col-sm-6 col-lg-2">
                                            <label for="date-from" class="form-label">Date (From)</label>
                                            <input type="date" name="#" class="form-control" id="date-from">
                                        </div>
                                        <!-- Date (to) -->
                                        <div class="col-12 col-sm-6 col-lg-2">
                                            <label for="date-to" class="form-label">Date (To)</label>
                                            <input type="date" name="#" class="form-control" id="date-to">
                                        </div>
                                        <!-- Supplier select  -->
                                        <div class="col-12 col-sm-6 col-lg-3">
                                            <label for="supplier" class="form-label ">Supplier</label>
                                            <select name="#" class="form-select" id="supplier">
                                                <option value="">Select</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <!-- Voucher No -->
                                        <div class="col-12 col-sm-6 col-lg-3">
                                            <label for="voucher" class="form-label">Voucher No</label>
                                            <input type="text" name="#" class="form-control" id="voucher" placeholder="xxxx">
                                        </div>
                                        <!-- button -->
                                        <div class="col-12 col-sm-6 col-lg-2">
                                            <label class="form-label">&nbsp;</label>
                                            <button type="submit" class="btn btn-block w-100 custom-btn btn-success">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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
                                            <a href="purchase_invoice.html" class="btn table-small-button" title="View">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="purchase_return.html" class="btn table-small-button" title="Return">
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
                                            <a href="purchase_invoice.html" class="btn table-small-button" title="View">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="purchase_return.html" class="btn table-small-button" title="Return">
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
                                            <a href="purchase_invoice.html" class="btn table-small-button" title="View">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="purchase_return.html" class="btn table-small-button" title="Return">
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
                                            <a href="purchase_invoice.html" class="btn table-small-button" title="View">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="purchase_return.html" class="btn table-small-button" title="Return">
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
                                            <a href="purchase_invoice.html" class="btn table-small-button" title="View">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="purchase_return.html" class="btn table-small-button" title="Return">
                                                <i class="bi bi-arrow-counterclockwise"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">06.</th>
                                        <td>23 August, 2020</td>
                                        <td class="text-">Abcd</td>
                                        <td><a href="#">545484</a></td>
                                        <td class="text-end">5,000.00</td>
                                        <td class="text-end">0.00</td>
                                        <td class="print-none text-end">
                                            <a href="purchase_invoice.html" class="btn table-small-button" title="View">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="purchase_return.html" class="btn table-small-button" title="Return">
                                                <i class="bi bi-arrow-counterclockwise"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colspan="4" class="text-end">Total</th>
                                        <th class="text-end border-start">5,000.00</th>
                                        <td colspan="2"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- pagination -->
                    <div class="card-footer print-none">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination pagination-sm m-0  justify-content-end">
                                <li class="page-item disabled"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
                                <li class="page-item"><a class="page-link page-link-active" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
</template>

<script>

export default {
    head:{
        title: 'Employee List'
    },
}
</script>

<style lang="scss" scoped>

</style>