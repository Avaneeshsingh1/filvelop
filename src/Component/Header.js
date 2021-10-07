import React from 'react'


const Header = (props) => {
    return (
        <header id="header" className="transparent-header" data-sticky-class="not-dark">
    <div id="header-wrap" class="">
        <div class="container">
            <div class="header-row header ">

                {/* <!-- Logo
                ============================================= --> */}
                <div id="logo">
                    <a href="index.html" class="standard-logo" data-dark-logo="asset/img/logo-filvelop.svg"><img src="asset/img/logo-filvelop.svg" alt="Filvelop Logo"/></a>
                    <a href="index.html" class="retina-logo" data-dark-logo="asset/img/logo-filvelop.svg"><img src="asset/img/logo-filvelop.svg" alt="Filvelop Logo"/></a>
                </div>{/* !-- #logo end --> */}

                <div class="header-misc">
                
                        
                        
                    <div  class="button button-orange rounded-pill ls0 font-weight-medium my-0 ml-2 d-none d-sm-flex dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign Up</div>
                    <div class="dropdown-menu">
                        <div onClick={()=>props.Loading(6)} class="dropdown-item" >Sign Up</div>
                        <div class="dropdown-item">Dashboard</div>
                    </div>
                
                    
                    
                    {/* <!-- Top Search
                    ============================================= --> */}
                    <div id="top-search" class="header-misc-icon">
                        <a href="search.html" id="top-search-trigger"><i class="icon-line-search"></i><i class="icon-line-cross"></i></a>
                    </div>{/* <!-- #top-search end --> */}
                </div>

                <div id="primary-menu-trigger">
                    <svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
                </div>

                {/* <!-- Primary Navigation
                ============================================= --> */}
                <nav class="primary-menu">

                    <ul class="menu-container">
                        
                    <li onClick={()=>props.Loading(1)} class="menu-item">
                            <div class="menu-link">About</div>
                        </li>
                        
                        <li onClick={()=>props.Loading(2)} class="menu-item">
                            <div class="menu-link">Discussion</div>
                        </li>
                    
                        <li onClick={()=>props.Loading(3)} class="menu-item">
                            <div class="menu-link">Happenings</div>
                        </li>
                        
                        
                        <li onClick={()=>props.Loading(4)} class="menu-item">
                            <div class="menu-link">Colleges</div>
                        </li>
                        
                         <li class="menu-item">
                            <a class="menu-link" href="exam-listing.html"><div>Exams</div></a>
                            <ul class="sub-menu-container">
                                <li class="menu-item">
                                    <a class="menu-link" href="exam-details.html"><div>Exam Details</div></a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="test-window.html" target="_blank"><div>Test Window</div></a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="test-submission.html" target="_blank"><div>Test Submission</div></a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="test-analysis.html" target="_blank"><div>Test Analysis</div></a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="solutions.html" target="_blank"><div>Solutions</div></a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="test-resources.html"><div>Test Resources</div></a>
                                </li>
                            </ul>
                        </li>
                        
                        <li onClick={()=>props.Loading(5)} class="menu-item">
                            <div class="menu-link">Login</div>
                        </li>
                    
                    </ul>

                </nav>{/* <!-- #primary-menu end --> */}

                <form class="top-search-form" action="search.html" method="get">
                    <input type="text" name="q" class="form-control" value="" placeholder="Type &amp; Hit Enter.." autocomplete="off"/>
                </form>

            </div>
        </div>
    </div>
    <div class="header-wrap-clone"></div>
</header>    
    )
}

export default Header
