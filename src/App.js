import icon_1 from './images/features-icon-1.svg'
import icon_2 from './images/features-icon-2.svg'
import icon_3 from './images/features-icon-3.svg'
import icon_4 from './images/features-icon-4.svg'
import icon_5 from './images/features-icon-5.svg'
import icon_6 from './images/features-icon-6.svg'
import result from './images/results.jpeg'
import insight from './images/insights.jpeg'
import dashboard from './images/dasboard_.png'
import accounting_2 from './images/accounting_2.jpeg'
import video from './images/peakbooks.mp4'


import './App.css';
import './swiper.css';
import {Helmet} from "react-helmet";
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

function App() {
  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* SEO Meta Tags */}
        <meta name="description" content="Peakbooks is the foremost accounting platform for businesses" />
        <meta name="author" content="Your name" />
        {/* OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn */}
        <meta property="og:site_name" content /> {/* website name */}
        <meta property="og:site" content /> {/* website link */}
        <meta property="og:title" content /> {/* title shown in the actual shared post */}
        <meta property="og:description" content /> {/* description shown in the actual shared post */}
        <meta property="og:image" content /> {/* image link, make sure it's jpg */}
        <meta property="og:url" content /> {/* where do you want your post to link to */}
        <meta name="twitter:card" content="summary_large_image" /> {/* to have large image post format in Twitter */}
        <Helmet>
          <script src = "./script.js" type = "text/javascript" />
        </Helmet>
        {/* Webpage Title */}
        <title>PeakBooks</title>
        {/* Styles */}
        
        {/* Favicon  */}
        {/*<link rel="icon" href="images/favicon.png" />*/}
        {/* Navigation */}
        <nav className="navbar fixed-top">
          <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
            {/* Text Logo - Use this if you don't have a graphic logo */}
            {/* <a class="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll" href="index.html">Pavo</a> */}
            {/* Image Logo */}
            <a className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="index.html">
              <img src="https://www.peakbooks.biz/static/media/logo.63883183.png" alt="Peakbooks logo" className="h-8" />
            </a>
            <button className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400" type="button" data-toggle="offcanvas">
              <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle" />
            </button>
            <div className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
              <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
                <li>
                  <a className="nav-link page-scroll active" href="#header">Home <span className="sr-only">(current)</span></a>
                </li>
                <li>
                  <a className="nav-link page-scroll" href="#features">Features</a>
                </li>
                <li>
                  <a className="nav-link page-scroll" href="#details">Details</a>
                </li>
                <li>
                  <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                </li>
                {/*<li class="dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a>
                            <div class="dropdown-menu" aria-labelledby="dropdown01">
                                <a class="dropdown-item page-scroll" href="article.html">Article Details</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                            </div>
                        </li>*/}
                <li>
                  <a className="nav-link page-scroll" href>Download</a>
                </li>
              </ul>
              <span className="block lg:ml-3.5">
                <a className="no-underline" href="#your-link">
                  <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5" />
                </a>
                <a className="no-underline" href="#your-link">
                  <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200" />
                </a>
              </span>
            </div> {/* end of navbar-collapse */}
          </div> {/* end of container */}
        </nav> {/* end of navbar */}
        {/* end of navigation */}
        {/* Header */}
        <div 
          className="mySwiper">
          <div>
            <header id="header" className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
              <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 text-center">
                <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-320 reduce-space">
                  <h2 className="h2-large mb-5">Africa’s number 1 Accounting software for SMEs.</h2>
                  <p className="p-large mb-8">Why do manual accounting if you can automate?</p>
                  <a className="btn-solid-lg" href="https://www.peakbooks.biz/login">Login</a>
                  <a className="btn-solid-lg secondary" href="https://www.peakbooks.biz/signup">Signup</a>
                </div>
                <div className="xl:text-right">
                  <video width="750" height="500" controls >
                    <source src={video} type="video/mp4"/>
                  </video>
                </div>
              </div> {/* end of container */}
            </header> {/* end of header */}
          </div>
          {/*<SwiperSlide>
            <header id="header" className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32 frontpage-slider2">
              <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-1 lg:gap-x-8 text-center">
                <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-320">
                  <h2 className="h2-large mb-5">The best accounting platform for businesses</h2>
                  <p className="p-large mb-8">Start getting your invoicing, expense tracking, reporting and inventory management done right with PeakBooks.</p>
                  <a className="btn-solid-lg" href="https://www.peakbooks.biz/login">Login</a>
                  <a className="btn-solid-lg secondary" href="https://www.peakbooks.biz/signup">Signup</a>
                </div>
              </div>
            </header>
          </SwiperSlide>
          <SwiperSlide>
            <header id="header" className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32 frontpage-slider3">
              <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-1 lg:gap-x-8 text-center">
                <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-320">
                  <h2 className="h2-large mb-5">The best accounting platform for businesses</h2>
                  <p className="p-large mb-8">Start getting your invoicing, expense tracking, reporting and inventory management done right with PeakBooks.</p>
                  <a className="btn-solid-lg" href="https://www.peakbooks.biz/login">Login</a>
                  <a className="btn-solid-lg secondary" href="https://www.peakbooks.biz/signup">Signup</a>
                </div>
              </div>
            </header> 
          </SwiperSlide>
          <SwiperSlide>
            <header id="header" className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32 frontpage-slider4">
              <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-1 lg:gap-x-8 text-center">
                <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-320">
                  <h2 className="h2-large mb-5">The best accounting platform for businesses</h2>
                  <p className="p-large mb-8">Start getting your invoicing, expense tracking, reporting and inventory management done right with PeakBooks.</p>
                  <a className="btn-solid-lg" href="https://www.peakbooks.biz/login">Login</a>
                  <a className="btn-solid-lg secondary" href="https://www.peakbooks.biz/signup">Signup</a>
                </div>
              </div>
            </header>
          </SwiperSlide> */}
        </div>
        {/* end of header */}
        {/* Introduction */}
        <div className="pt-4 pb-14 text-center">
          <div className="container px-4 sm:px-8 xl:px-4">
            <p className="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto"> Why PeakBooks is good for your business?</p>
          </div> {/* end of container */}
        </div>
        {/* end of introduction */}
        {/* Features */}
        <div id="features" className="cards-1">
          <div className="container px-4 sm:px-8 xl:px-4">
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <img src={icon_1} alt="alternative" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Effortless Invoicing.</h5>
                <p className="mb-4">PeakBooks takes away the pain of manual invoicing. Create and send invoices, receipts, quotations online.</p>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <img src={icon_2} alt="alternative" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Track Your Expenses.</h5>
                <p className="mb-4">Track your expenses and maximize on your profits. You can categorize expenses for easy reporting.</p>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <img src={icon_3} alt="alternative" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Insightful Reportst.</h5>
                <p className="mb-4">PeakBooks saves you long hours of manual preparation of financial reports. Get a variety of financial report in a click.</p>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <img src={icon_4} alt="alternative" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Dependable Support.</h5>
                <p className="mb-4">Reach out to our support team, for the right solution any time. The good thing is, the support is free.</p>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <img src={icon_5} alt="alternative" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Security of your data.</h5>
                <p className="mb-4">PeakBooks has employed rigorous safeguards to protect your data.</p>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <img src={icon_6} alt="alternative" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Track your income.</h5>
                <p className="mb-4">It is now easier to track your receivables and send reminders for overdue invoices, and be paid faster.</p>
              </div>
            </div>
            {/* end of card */}
          </div> {/* end of container */}
        </div> {/* end of cards-1 */}
        {/* end of features */}
        {/* Details 1 */}
        {/*<div id="details" className="pt-12 pb-16 lg:pt-16">
          <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <div className="mb-16 lg:mb-0 xl:mt-16">
                <h2 className="mb-6">Results driven accounting software</h2>
                <p className="mb-4">Thousands of African businesses have already started getting results in their accounting tasks, by using PeakBooks software.</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="xl:ml-14">
                <img className="inline" src={result} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-24">
          <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-7">
              <div className="mb-12 lg:mb-0 xl:mr-14">
                <img className="inline" src={insight} alt="" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="xl:mt-12">
                <h2 className="mb-6">Gather accurate insight about your business accounting.</h2>
                <ul className="list mb-7 space-y-2">
                  <li className="flex">
                    <div>PeakBooks platform has features that will help you understand more aboutr your business accounting.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {<div id="details-lightbox" class="lightbox-basic zoom-anim-dialog mfp-hide">
            <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
                <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
                <div class="lg:col-span-8">
                    <div class="mb-12 text-center lg:mb-0 lg:text-left xl:mr-6">
                        <img class="inline rounded-lg" src="images/details-lightbox.jpg" alt="alternative" />
                    </div>
                </div> 
                <div class="lg:col-span-4">
                    <h3 class="mb-2">Goals Setting</h3>
                    <hr class="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-indigo-600" />
                    <p>The app can easily help you track your personal development evolution if you take the time to set it up.</p>
                    <h4 class="mt-7 mb-2.5">User Feedback</h4>
                    <p class="mb-4">This is a great app which can help you save time and make your live easier. And it will help improve your productivity.</p>
                    <ul class="list mb-6 space-y-2">
                        <li class="flex">
                            <i class="fas fa-chevron-right"></i>
                            <div>Splash screen panel</div>
                        </li>
                        <li class="flex">
                            <i class="fas fa-chevron-right"></i>
                            <div>Statistics graph report</div>
                        </li>
                        <li class="flex">
                            <i class="fas fa-chevron-right"></i>
                            <div>Events calendar layout</div>
                        </li>
                        <li class="flex">
                            <i class="fas fa-chevron-right"></i>
                            <div>Location details screen</div>
                        </li>
                        <li class="flex">
                            <i class="fas fa-chevron-right"></i>
                            <div>Onboarding steps interface</div>
                        </li>
                    </ul>
                    <a class="btn-solid-reg mfp-close page-scroll" href="#download">Download</a>
                    <button class="btn-outline-reg mfp-close as-button" type="button">Back</button>
                </div>
            </div> 
        </div> }
        <div className="pt-16 pb-12">
          <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <div className="mb-16 lg:mb-0 xl:mt-16">
                <h2 className="mb-6">Easy to utilize dasboard.</h2>
                <p className="mb-4">PeakBooks platform has a smooth learning curve and it is relatively easy to start being used, for all your
                  businesses accounting related tasks.</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="ml-14">
                <img className="inline" src={dashboard} alt="" />
              </div>
            </div>
          </div> 
        </div>
        <div className="counter">
          <div className="container px-4 sm:px-8">
            <div id="counter">
              <div className="cell">
                <div className="counter-value number-count" data-count={1000}>1</div>
                <p className="counter-info"> Happy Users</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count={185}>1</div>
                <p className="counter-info">Issues Solved</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count={9999}>1</div>
                <p className="counter-info">Reports Generated</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count={7000}>1</div>
                <p className="counter-info">Invoices Generated</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count={3000}>1</div>
                <p className="counter-info">Inventories Created</p>
              </div>
            </div>
          </div>
        </div>  end of counter */}

        {/* Testimonials */}
        {/* <div className="py-32 bg-gray">
          <div className="container px-4 sm:px-8">
            <h2 className="mb-12 text-center lg:max-w-xl lg:mx-auto">What do users think about Pavo</h2>
            <div className="reduce-con">
              <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <div className="card">
                      <div className="center-image">
                        <img className="card-image" src alt="" />
                      </div>
                      <div className="card-body text-center">
                        <p className="italic mb-3">
                          PeakBooks is one of the best accounting systems in Kenya, they offer a wide range of products in just minutes. If you looking for reliable accounting services just try them.</p>
                        <p className="testimonial-author">Eric Ndungu</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <img className="card-image" src alt="" />
                      <div className="card-body">
                        <p className="italic mb-3">Peak Books Service is revolutionary. :-) I will be referring my Non profit friends as well to enjoy the service</p>
                        <p className="testimonial-author">Coach Ben</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <img className="card-image" src alt="" />
                      <div className="card-body">
                        <p className="italic mb-3">Great Accounting system</p>
                        <p className="testimonial-author">Nixon Yebei</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <img className="card-image" src alt="" />
                      <div className="card-body">
                        <p className="italic mb-3">We've been waiting for a powerful accounting software that could help us with our accounting tasks, and PeakBooks is that software.</p>
                        <p className="testimonial-author">Maswai Kelvin</p>
                      </div>
                    </div>
                  </SwiperSlide> 
                  <SwiperSlide>
                    <div className="card">
                      <img className="card-image" src alt="" />
                      <div className="card-body">
                        <p className="italic mb-3">Great platform for doing my business accounting, 5 stars all round.</p>
                        <p className="testimonial-author">Captain Kiprop Linus</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div> */}
        {/* end of testimonials */}
        {/* Pricing */}
        <div id="pricing" className="cards-2">
          <div className="absolute bottom-0 h-40 w-full bg-white" />
          <div className="container px-4 pb-px sm:px-8">
            <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">Pricing options for all budgets</h2>
            <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto"> Our pricing plans are setup in such a way that any user can start enjoying Pavo without worrying so much about costs. They are flexible and work for any type of industry </p>
            {/* Card*/}
            <div className="card">
              <div className="card-body">
                <div className="card-title">Basic Plan</div>
                <div className="price"><span className="currency">₦</span><span className="value">1,000</span></div>
                <div className="frequency">monthly</div>
                <p>This basic package covers the marketing needs of small startups</p>
                <ul className="list mb-7 space-y-2 text-left">
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>1 Admin + 1 Accountant</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Unlimited invoices</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Receipts</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Quotations</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Recurring Invoices</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Recurring Expenses</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Payment Reminders</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Finanacial Reports</div>
                  </li>
                </ul>
                <div className="button-wrapper">
                  <a className="btn-solid-reg page-scroll" href='https://www.peakbooks.biz'>Signup</a>
                </div>
              </div>
            </div> {/* end of card */}
            {/* end of card */}
            {/* Card*/}
            <div className="card">
              <div className="card-body">
                <div className="card-title">Standard Plan</div>
                <div className="price"><span className="currency">₦</span><span className="value">52,800</span></div>
                <div className="frequency">annually</div>
                <p>This is a more advanced package suited for medium companies</p>
                <ul className="list mb-7 space-y-2 text-left">
                <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Basic Plan+</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>2 Admins + 3 Accountants</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Bank Reconciliation</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Bills</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Document Upload</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Multi-Currency</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Sales Orders</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Sales Approval</div>
                  </li>
                </ul>
                <div className="button-wrapper">
                  <a className="btn-solid-reg page-scroll" href='https://www.peakbooks.biz'>SignUp</a>
                </div>
              </div>
            </div> {/* end of card */}
            {/* end of card */}
            {/* Card*/}
            <div className="card">
              <div className="card-body">
                <div className="card-title">Premium Plan</div>
                <div className="price"><span className="currency">₦</span><span className="value">2,000</span></div>
                <div className="frequency">monthly</div>
                <p>This is a comprehensive package designed for big organizations</p>
                <ul className="list mb-7 text-left space-y-2">
                <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Standard Plan+</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>3 Admins + 4 Accountants</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Purchase Orders</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Payroll</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Business Goals</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Reporting Tags</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Inventory</div>
                  </li>
                  <li className="flex">
                    <i className="fas fa-chevron-right" />
                    <div>Stock Tracking</div>
                  </li>
                </ul>
                <div className="button-wrapper">
                  <a className="btn-solid-reg page-scroll" href>SignUp</a>
                </div>
              </div>
            </div> {/* end of card */}
            {/* end of card */}
          </div> {/* end of container */}
        </div> {/* end of cards-2 */}
        {/* end of pricing */}
        {/* Conclusion */}
        <div id="download" className="basic-5">
          <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
            <div className="mb-16 lg:mb-0">
              <img src={accounting_2} alt="alternative" />
            </div>
            <div className="lg:mt-24 xl:mt-44 xl:ml-12">
              <p className="mb-9 text-gray-800 text-3xl leading-10">Sign up today for PeakBooks and enjoy hassle free Accounting on Africa’s number 1 accounting software and get up to 30 days free trial of a great accounting software.</p>
              <a className="btn-solid-lg" href="https://www.peakbooks.biz/login">Login</a>
              <a className="btn-solid-lg secondary" href="https://www.peakbooks.biz/signup">Signup</a>
            </div>
          </div> {/* end of container */}
        </div> {/* end of basic-5 */}
        {/* end of conclusion */}
        <div className="counter">
          <div className="container px-4 sm:px-8">
            <div id="counter">
              <div className="cell">
                <div className="counter-value number-count" data-count={1000}>1</div>
                <p className="counter-info"> Happy Users</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count={185}>1</div>
                <p className="counter-info">Issues Solved</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count={9999}>1</div>
                <p className="counter-info">Reports Generated</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count={7000}>1</div>
                <p className="counter-info">Invoices Generated</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count={3000}>1</div>
                <p className="counter-info">Inventories Created</p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="footer">
          <div className="container px-4 sm:px-8">
            <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">Need a custom plan, tell us your specifications and we will build it for you. You can reach us at<br /> Email:<a className="text-indigo-600 hover:text-gray-500" href="mailto:peakbooks@peakbooks.biz">peakbooks@peakbooks.biz</a><br /> &amp; via Cell-Phone:+254 736 105920</h4>
            <div className="social-container">
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook-f fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-pinterest-p fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-instagram fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-youtube fa-stack-1x" />
                </a>
              </span>
            </div> {/* end of social-container */}
          </div> {/* end of container */}
        </div> {/* end of footer */}
        {/* end of footer */}
        {/* Copyright */}
        <div className="copyright">
          <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
            <ul className="mb-4 list-unstyled p-small">
              {/*<li class="mb-2"><a href="article.html">Article Details</a></li>*/}
              <li className="mb-2"><a href>Terms &amp; Conditions</a></li>
              <li className="mb-2"><a href>Privacy Policy</a></li>
            </ul>
            <p className="pb-2 p-small statement">Copyright © <a href className="no-underline">PeakBooks</a></p>
            <p className="pb-2 p-small statement">Distributed by :<a href className="no-underline">PeakBooks</a></p>
          </div> 
          {/* end of container */}
        </div> {/* end of copyright */}
        {/* end of copyright */}
        {/* Scripts */}
        {/* jQuery for JavaScript plugins */}
        {/* jQuery Easing for smooth scrolling between anchors */}
        {/* Swiper for image and text sliders */}
        {/* Magnific Popup for lightboxes */}
        {/* Custom scripts */}
      </div>

  );
}

export default App;
