<script setup>

</script>

<template>
    <main>
        <header>
            <nav class="navbar navbar-expand-sm ">
                <div class="container">
                    <a class="navbar-brand" href="#">E-SHOP</a>

                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0 mx-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#" aria-current="page">Home <span
                                        class="visually-hidden">(current)</span></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Men's</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Women's</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Kid's</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Pages</a>
                                <div class="dropdown-menu shadow-lg px-5" aria-labelledby="dropdownId">
                                    <a class="dropdown-item w-100" href="#">About us</a>
                                    <a class="dropdown-item" href="#">Products</a>
                                    <a class="dropdown-item" href="#">Contact us</a>
                                </div>
                            </li>
                        </ul>
                        <form class="d-flex my-2 my-lg-0">
                            <input class="form-control me-sm-2" type="text" placeholder="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </header>

        <slot></slot>


            <div class="px-1">
                    <!-- Footer -->
                    <footer class=" text-start text-white bg-primary " >
                     
    
                        <section class="py-4">
                            <div class="container text-md-start mt-5">
                                <div class="row mt-3">
                                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        <h6 class="text-uppercase fw-bold">E-SHOP</h6>
                                        <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                            style="width: 60px; background-color: #7c4dff; height: 2px" />
                                        <p>
                                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                                            amet iusto sunt perferendis, nobis dolore magni ex deserunt optio?
                                             Quo ad eaque delectus minus et omnis dolorem fuga, perferendis nemo?
                                        </p>
                                    </div>
    
                                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    
                                        <h6 class="text-uppercase fw-bold">Categories</h6>
                                        <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                            style="width: 60px; background-color: #7c4dff; height: 2px" />
                                        <p>
                                            <a href="#!" class="text-white">Men</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-white">women</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-white">Kids</a>
                                        </p>
                                        
                                    </div>
    
                                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <!-- Links -->
                                        <h6 class="text-uppercase fw-bold">Useful links</h6>
                                        <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                            style="width: 60px; background-color: #7c4dff; height: 2px" />
                                        <p>
                                            <a href="#!" class="text-white">Home</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-white">About us</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-white">Products</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-white">Help</a>
                                        </p>
                                    </div>
    
                                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        
                                        <h6 class="text-uppercase fw-bold">Contact</h6>
                                        <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                            style="width: 60px; background-color: #7c4dff; height: 2px" />
                                        <p><i class="fas fa-home mr-3"></i> Kubwa, FCT Abuja</p>
                                        <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                                        <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                        <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                    </div>
                                
                                </div>
                              
                            </div>
                        </section>
                   
                        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                            © 2023 Copyright:
                            <a class="text-white" href="#">e-shop.com</a>
                        </div>
                      <!-- Section: Social media -->
                      <section class="d-flex justify-content-between p-4">
                        <!-- Left -->
                        <div class="me-md-5">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <!-- Left -->

                        <!-- Right -->
                        <div>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                        <!-- Right -->
                    </section>
                    <!-- Section: Social media -->
                    </footer>
                    <!-- Footer -->
            </div>

    </main>
</template>

<style lang="sass" scoped>
    @import '~/assets/var'
    main
        header
            .navbar
                min-height: 100px
                font-weight: bolder
                border-bottom: 1px dashed $secondary
</style>
