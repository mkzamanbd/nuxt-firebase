<template>
    <div>
        <aside class="page-aside">
        <!-- accordion menu -->

        <!-- aside brand -->
        <div class="aside-brand">
            <a href="dashboard.html">
                <img src="@/assets/template/resources/images/logos/logo_with_name.svg" alt="">
            </a>
        </div>
        <!-- End aside-brand -->

        <ul class="accordion" id="asideAccordion">
            <h6 class="ps-3 py-1">Basic</h6>
            <li class="accordion-item">
                <nuxt-link to="/admin" class="sigle-nav-link active">
                    <i class="bi bi-house"></i>
                    <span>Dashboard</span>
                </nuxt-link>
            </li>

            <li class="accordion-item">
                <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#purchase" aria-expanded="false" aria-controls="purchase">
                    <i class="bi bi-people"></i>
                    <span>Users</span>
                </a>

                <ul id="purchase" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#asideAccordion">
                    <li><nuxt-link to="/admin/users" class="nav-link">All Records</nuxt-link></li>
                    <li><nuxt-link to="/admin/users/create" class="nav-link">New Entry</nuxt-link></li>
                </ul>
            </li>

            <li class="accordion-item">
                <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#sale" aria-expanded="false" aria-controls="sale">
                    <i class="bi bi-cart3"></i>
                    <span>Sales</span>
                </a>

                <ul id="sale" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#asideAccordion">
                    <li><a href="sale_records.html" class="nav-link">All Records</a></li>
                    <li><a href="sale_entry.html" class="nav-link">New Entry</a></li>
                </ul>
            </li>
            
            <li class="accordion-item">
                <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#parties" aria-expanded="false" aria-controls="parties">
                    <i class="bi bi-people"></i>
                    <span>Parties</span>
                </a>

                <ul id="parties" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                    <li><a href="supplier.html" class="nav-link">Supplier</a></li>
                    <li><a href="customer.html" class="nav-link">Customer</a></li>
                </ul>
            </li>

            <li class="accordion-item">
                <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#stock" aria-expanded="false" aria-controls="stock">
                    <i class="bi bi-inboxes"></i>
                    <span>Stock</span>
                </a>

                <ul id="stock" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                    <li><a href="supplier.html" class="nav-link">Supplier</a></li>
                    <li><a href="customer.html" class="nav-link">Customer</a></li>
                </ul>
            </li>

            <li class="accordion-item">
                <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#banking" aria-expanded="false" aria-controls="banking">
                    <i class="bi bi-credit-card"></i>
                    <span>Banking</span>
                </a>

                <ul id="banking" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                    <li><a href="bank_transaction.html" class="nav-link">All Transaction</a></li>
                    <li><a href="bank_entry.html" class="nav-link">New Entry</a></li>
                </ul>
            </li>

            <li class="accordion-item">
                <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#components" aria-expanded="false" aria-controls="components">
                    <i class="bi bi-code-slash"></i>
                    <span>Components</span>
                </a>

                <ul id="components" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                    <li><a href="table.html" class="nav-link">Table</a></li>
                    <li><a href="form.html" class="nav-link">Form</a></li>
                    <li><a href="icon.html" class="nav-link">Icon</a></li>
                    <li><a href="button.html" class="nav-link">Button</a></li>
                    <li><a href="accordion.html" class="nav-link">Accordion</a></li>
                </ul>
            </li>

            <li class="accordion-item">
                <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#media" aria-expanded="false" aria-controls="media">
                    <i class="bi bi-film"></i>
                    <span>Media</span>
                </a>

                <ul id="media" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                    <li><a href="media_upload.html" class="nav-link">Upload</a></li>
                    <li><a href="media_gallery.html" class="nav-link">Gallery</a></li>
                    <li><a href="media_album.html" class="nav-link">Album</a></li>
                </ul>
            </li>
            <h6 class="ps-3 py-1">Pages</h6>
            <li class="accordion-item">
                <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pages" aria-expanded="false" aria-controls="pages">
                    <i class="bi bi-file-earmark-break"></i>
                    <span>Pages</span>
                </a>

                <ul id="pages" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                    <li><a href="voucher.html" class="nav-link">Voucher</a></li>
                    <li><a href="invoice.html" class="nav-link">Invoice</a></li>
                    <li><a href="gate_pass.html" class="nav-link">Gate Pass </a></li>
                    <li><a href="coming_soon_basic.html" class="nav-link">Basic Coming Soon</a></li>
                    <li><a href="countdown_coming_soon.html" class="nav-link">Countdown Coming Soon</a></li>
                    <li><a href="screen_lock.html" class="nav-link">Screen Lock</a></li>
                    <li><a href="preloader.html" class="nav-link">Preloader</a></li>
                    <li><a href="empty_page.html" class="nav-link">Empty Page </a></li>
                    <li><a href="under_construction.html" class="nav-link">Under Construction</a></li>
                    <li><a href="404.html" class="nav-link">404 Erorr</a></li>
                    <li><a href="500.html" class="nav-link">500 Erorr</a></li>
                    <li><a href="503.html" class="nav-link">503 Erorr</a></li>
                </ul>
            </li>
        </ul>
    </aside>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>