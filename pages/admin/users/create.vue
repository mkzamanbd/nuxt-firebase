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
            <div class="purchase-new-entry">
                <div class="container">
                    <div class="card mb-5 border-0">
                        <div class="card-header p-0 border-0 d-flex">
                            <!-- page title -->
                            <div class="mt-3">
                                <h4 class="main-title">New Purchase</h4>
                                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, et.</small></p>
                            </div>
                            <!-- header icon -->
                            <a href="purchase_records.html" title="Go back"
                                class="pe-0 ms-auto print-none top-icon-button mb-2 mt-3">
                                <i class="bi bi-arrow-left"></i>
                            </a>
                        </div>
                        <div class="card-body p-0 pt-3">
                            <form action="#">
                                <div class="row gx-3 gy-2">
                                    <div class="col-12 col-sm-6 col-md-2">
                                        <label for="date" class="form-label required">Date</label>
                                        <input type="date" class="form-control" name="date" id="date" required>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-2">
                                        <label for="voucher-no" class="form-label required">Voucher No</label>
                                        <input type="text" class="form-control" name="voucher_no" id="voucher-no"
                                            placeholder="Enter Voucher No" required>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-3">
                                        <label for="supplier" class="form-label required">Supplier</label>
                                        <select class="form-select" name="supplier" id="supplier"
                                            aria-label="Default select example" required>
                                            <option value="">select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-3">
                                        <label for="product" class="form-label required">Product</label>
                                        <select class="form-select" name="product" id="product"
                                            aria-label="Default select example" required>
                                            <option value="">select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-2 text-end">
                                        <label class="form-label">&nbsp;</label>
                                        <button type="button" class="btn btn-block w-100 custom-btn btn-success"
                                            data-bs-toggle="modal" data-bs-target="#set-quantity">Set Quantity</button>
                                    </div>
                                    <div class="col-12 p-2">
                                        <div class="table-responsive">
                                            <table class="table custom-table table-hover text-end">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" style="width: 5%;" class="text-start">SL</th>
                                                        <th scope="col" class="text-start">Details</th>
                                                        <th scope="col">Quantity</th>
                                                        <th scope="col">Purchase price</th>
                                                        <th scope="col">Line total</th>
                                                        <th scope="col" class="print-none ">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="text-start">01.</th>
                                                        <td class="text-start">Pran Rice</td>
                                                        <td>12 Box</td>
                                                        <td>50.00</td>
                                                        <td>6000.00</td>
                                                        <td class="print-none ">
                                                            <!-- Icons -->
                                                            <a href="#" title="Edit" class="table-small-button ms-2" data-bs-toggle="modal" data-bs-target="#set-quantity">
                                                                <i class="bi bi-pencil-square"></i>
                                                            </a>
                                                            <a href="#" title="Delete"
                                                                class="table-small-button ms-2 table-small-button-danger">
                                                                <i class="bi bi-x-square"></i>
                                                            </a>
                                                            <!-- End Icons -->
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-start">02.</th>
                                                        <td class="text-start">Pran Rice</td>
                                                        <td>12 Box</td>
                                                        <td>50.00</td>
                                                        <td>6000.00</td>
                                                        <td class="print-none ">
                                                            <!-- Icons -->
                                                            <a href="#" title="Edit" class="table-small-button ms-2" data-bs-toggle="modal" data-bs-target="#set-quantity">
                                                                <i class="bi bi-pencil-square"></i>
                                                            </a>
                                                            <a href="#" title="Delete"
                                                                class="table-small-button ms-2 table-small-button-danger">
                                                                <i class="bi bi-x-square"></i>
                                                            </a>
                                                            <!-- End Icons -->
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-start">03.</th>
                                                        <td class="text-start">Pran Rice</td>
                                                        <td>12 Box</td>
                                                        <td>50.00</td>
                                                        <td>6000.00</td>
                                                        <td class="print-none ">
                                                            <!-- Icons -->
                                                            <a href="#" title="Edit" class="table-small-button ms-2" data-bs-toggle="modal" data-bs-target="#set-quantity">
                                                                <i class="bi bi-pencil-square"></i>
                                                            </a>
                                                            <a href="#" title="Delete"
                                                                class="table-small-button ms-2 table-small-button-danger">
                                                                <i class="bi bi-x-square"></i>
                                                            </a>
                                                            <!-- End Icons -->
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="4">Subtotal</th>
                                                        <th>6000.00</th>
                                                        <th></th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="4">Others cost</th>
                                                        <th style="width: 15%;"> <input type="text"
                                                                class="form-control text-end" placeholder="0.00"> </th>
                                                        <th></th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="4">Supplier's balance</th>
                                                        <th class="text-danger">-50000.00</th>
                                                        <th>Payable</th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="4">Grand total</th>
                                                        <th class="text-danger">-50000.00</th>
                                                        <th>Payable</th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="3"></th>
                                                        <th>Make payment</th>
                                                        <th colspan="2"><button class="btn custom-btn btn-success btn-sm"
                                                                type="button" data-bs-toggle="modal" data-bs-target="#payment-method">Select
                                                                Mathod</button></th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="4">Supplier's current balance</th>
                                                        <th class="text-danger">-50000.00</th>
                                                        <th>Payable</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                    <div class="col-12 mt-0">
                                        <label for="note" class="form-label">  Note  </label>
                                        <textarea name="note" id="note" class="form-control" rows="3"></textarea>
                                    </div>
                                    <div class="col-md-12 text-end mt-3">
                                        <button type="reset" class="btn btn-danger custom-btn">Clear Cart</button>
                                        <button type="submit" class="btn btn-success custom-btn">Purchase</button>
                                    </div>
                                </div>
                            </form>




                            <!-- quantity Modal -->



                            <div class="modal fade" id="set-quantity" tabindex="-1" aria-labelledby="setQuantityLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <form action="#">

                                            <div class="modal-header">
                                                <h5 class="modal-title" id="setQuantityLabel">Select Quantity</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row g-3">
                                                    <div class="col-12">
                                                        <div class="warehouse-wrapper">
                                                            <div class="row gy-2">
                                                                <div class="col-12 col-md-6 col-lg-4">
                                                                    <p class="mb-0">গাঙ্গিনাপার গুদাম</p>
                                                                    <span class="text-muted text-small"> stock: 8 Box
                                                                        5.00</span>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" name="box">
                                                                        <span class="input-group-text">Box</span>
                                                                    </div>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" name="pcs">
                                                                        <span class="input-group-text">PCS</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6 col-lg-4">
                                                                    <p class="mb-0">গাঙ্গিনাপার গুদাম</p>
                                                                    <span class="text-muted text-small"> stock: 8 Box
                                                                        5.00</span>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" name="box">
                                                                        <span class="input-group-text">Box</span>
                                                                    </div>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" name="pcs">
                                                                        <span class="input-group-text">PCS</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6 col-lg-4">
                                                                    <p class="mb-0">গাঙ্গিনাপার গুদাম</p>
                                                                    <span class="text-muted text-small"> stock: 8 Box
                                                                        5.00</span>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" name="box">
                                                                        <span class="input-group-text">Box</span>
                                                                    </div>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" name="pcs">
                                                                        <span class="input-group-text">PCS</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6 col-lg-4">
                                                                    <p class="mb-0">গাঙ্গিনাপার গুদাম</p>
                                                                    <span class="text-muted text-small"> stock: 8 Box
                                                                        5.00</span>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" name="box">
                                                                        <span class="input-group-text">Box</span>
                                                                    </div>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" name="pcs">
                                                                        <span class="input-group-text">PCS</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-12 col-md-6 col-lg-4">
                                                                <label for="purchase-price" class="form-label">Purchase
                                                                    Price</label>
                                                                <div class="input-group mb-3">
                                                                    <input type="text" class="form-control"
                                                                        name="voucher_no" id="purchase-price"
                                                                        placeholder="Enter Purchase Price">
                                                                    <span class="input-group-text">BDT</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-md-6 col-lg-4">
                                                                <label for="retail-price" class="form-label">Retail
                                                                    Price</label>
                                                                <div class="input-group mb-3">
                                                                    <input type="text" class="form-control"
                                                                        name="retail_price" id="retail-price"
                                                                        placeholder="Enter Retail Price">
                                                                    <span class="input-group-text">BDT</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-md-6 col-lg-4">
                                                                <label for="wholesale-price" class="form-label">Wholesale
                                                                    Price</label>
                                                                <div class="input-group mb-3">
                                                                    <input type="text" class="form-control"
                                                                        name="wholesale_price" id="wholesale-price"
                                                                        placeholder="Enter Wholesale Price">
                                                                    <span class="input-group-text">BDT</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Erorr Massage -->
                                                    <!-- <span class="text-danger"><small>Error: Quantity can't be empty</small></span> -->
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn custom-btn btn-danger"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="submit" class="btn custom-btn btn-success">Add to
                                                    cart</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- End quantity Modal -->

                            <!-- Payment Method Modal -->
                            <div class="modal fade" id="payment-method" tabindex="-1" aria-labelledby="paymentMethodLabel"
                            aria-hidden="true">
                                <div class="modal-dialog">
                                    <form action="#">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="paymentMethodLabel">Select Payment Method
                                                </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row g-2">
                                                    <div class="col-12">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio"
                                                                onclick="if(this.checked){paymentMethodCash()}"
                                                                name="transfer-from" id="transfar-from-cash" value="cash"
                                                                checked>
                                                            <label class="form-check-label" for="transfar-from-cash">Cash
                                                            </label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input " type="radio"
                                                                onclick="if(this.checked){paymentMethodBank()}"
                                                                name="transfer-from" id="transfar-from-bank" value="bank">
                                                            <label class="form-check-label" for="transfar-from-bank">
                                                                Bank</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 cash-inactive input-active">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <label for="transfar-from-cash-select"
                                                                    class="form-label required">Cash</label>
                                                                <select class="form-select d-block"
                                                                    name="transfar_from_cash" id="transfar-from-cash-select"
                                                                    required>
                                                                    <option value="">select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="bg-dark text-light p-2 mt-3">Current Balance BDT
                                                                    4000.00</div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="col-12 bank-inactive">
                                                        <div class="row">
                                                            <div class="col-12 col-md-6">
                                                                <label for="transfar-from-bank-select"
                                                                    class="form-label required">bank</label>
                                                                <select class="form-select d-block" name="bank"
                                                                    id="transfar-from-bank-select" required>
                                                                    <option value="">select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-12 col-md-6">
                                                                <label for="account" class="form-label required">Account
                                                                    no.</label>
                                                                <select class="form-select d-block" name="account"
                                                                    id="account" required>
                                                                    <option value="">select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-12 col-md-6">
                                                                <label for="cheque" class="form-label">Cheque
                                                                    no.</label>
                                                                <input type="text" name="cheque" class="form-control "
                                                                    id="cheque">
                                                            </div>
                                                            <div class="col-12 col-md-6">
                                                                <label for="issue-date" class="form-label">Issue
                                                                    Date</label>
                                                                <input type="date" name="issue_date" class="form-control "
                                                                    id="issue-date">
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="bg-dark text-light p-2 mt-3">Current Balance
                                                                    BDT 4000.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label for="amount" class="form-label required">Amount</label>
                                                        <input type="text" name="amount" class="form-control " id="amount"
                                                            placeholder="Enter Payment Amount" required>
                                                        <small class="text-muted">* Amount must be less than or
                                                            equal current balance (4000.00)</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn custom-btn btn-danger"
                                                data-bs-dismiss="modal">Close</button>
                                                <button type="submit" class="btn custom-btn btn-success">Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- End Payment Method Modal -->
                        </div>
                    </div>
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