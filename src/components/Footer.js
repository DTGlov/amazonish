import React from 'react'

function Footer() {
    return (
        <div className="mt-16 bg-blue-amazon flex justify-evenly space-x-5 p-3 text-xs">
            <div className="flex flex-col text-white md:text-sm">
                <span className="font-bold">Get to know us</span>
                <span>Careers</span>
                <span>Blog</span>
                <span>About Us</span>
                <span>Investor Relations</span>
</div>
            <div className="flex flex-col text-white md:text-sm">
                <span className="font-bold">Make Money With Us</span>
                <span>Become an Affiliate</span>
                <span>Advertise your Products</span>
                <span>Self Publish with us</span>
                <span>Host an Amazon Hub</span>
</div>
            <div className="flex flex-col text-white md:text-sm">
                <span className="font-bold">Amazon Payment Product</span>
                <span>Amazon Business Card</span>
                <span>Shop with points</span>
                <span>Reload your Balance</span>
                <span>Amazon Currency Converter</span>
</div>
            <div className="flex flex-col text-white md:text-sm">
                <span className="font-bold">Let Us Help You</span>
                <span>Your Account</span>
                <span>Your Orders</span>
                <span>Amazon Assistant</span>
                <span>Help</span>
</div>
        </div>
    )
}

export default Footer
