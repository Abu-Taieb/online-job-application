import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white lg:flex justify-center lg:justify-between gap-10 p-10">
        <div className="w-full lg:w-2/5 py-5 text-center lg:text-left">
          <h2 className="text-4xl">Need Jobs</h2>
          <p className="py-5">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img className="" src="Group 9969.png" alt="social" />
        </div>
        <div className="lg:w-3/5 flex justify-between gap-12 py-5 ">
            <div className="">
                <h4 className="text-2xl font-semibold">Company</h4>
                <ul>
                    <li className="list-none p-0 my-3"><a href="#">About Us</a></li>
                    <li className="list-none p-0 my-3"><a href="#">Work</a></li>
                    <li className="list-none p-0 my-3"><a href="#">Latest News</a></li>
                    <li className="list-none p-0 my-3"><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className="">
                <h4 className="text-2xl font-semibold">Product</h4>
                <ul>
                    <li className="list-none p-0 my-3"><a href="#">Prototype</a></li>
                    <li className="list-none p-0 my-3"><a href="#">Work</a></li>
                    <li className="list-none p-0 my-3"><a href="#">Customers</a></li>
                    <li className="list-none p-0 my-3"><a href="#">Integration</a></li>
                </ul>
            </div>
            <div className="">
                <h4 className="text-2xl font-semibold">Support</h4>
                <ul>
                    <li className="list-none p-0 my-3"><a href="#">Help Desk</a></li>
                    <li className="list-none p-0 my-3"><a href="#">Sales</a></li>
                    <li className="list-none p-0 my-3"><a href="#">Pertner</a></li>
                    <li className="list-none p-0 my-3"><a href="#">Developer</a></li>
                </ul>
            </div>
            <div className="">
                <h4 className="text-2xl font-semibold">Contact</h4>
                <ul>
                    <li className="list-none p-0 my-3"><a href="#">524 RN, NYC</a></li>
                    <li className="list-none p-0 my-3"><a href="#">+1577-978</a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
