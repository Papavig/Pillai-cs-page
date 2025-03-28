const Footer = () => {
  return (
    <footer>
      <div className="bg-[#474747] text-gray-300 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold mb-2 border-b border-gray-600 text-lg">Contact</h3>
            <p className="text-sm font-semibold mb-1">Pillai College of Arts, Commerce & Science (Autonomous)</p>
            <p className="text-sm">Dr. K. M. Vasudevan Pillai Campus</p>
            <p className="text-sm">Plot No. 10, Sector 16</p>
            <p className="text-sm mb-1">New Panvel – 410206</p>
            <p className="text-sm hover:underline">www.pcacs.ac.in</p>
            <p className="text-sm hover:underline">pcacs@mes.ac.in</p>
            <p className="text-sm hover:underline">admissions@mes.ac.in</p>
          </div>
  
          {/* Contact Numbers */}
          <div>
            <h3 className="font-bold mb-2 border-b border-gray-600 text-lg">Contact No.</h3>
            <p className="text-sm mb-1">Reception: 022-65748000</p>
            <p className="text-sm mb-1">Admission Office: 022-65748016, 022-65748014</p>
            <p className="text-sm mb-1">Placement: 022-65748008</p>
            <p className="text-sm mb-1">Exam Cell: 022-65748004</p>
          </div>
  
          {/* Online Portal Links */}
          <div>
            <h3 className="font-bold mb-2 border-b border-gray-600 text-lg">Online Portal</h3>
            <p className="text-sm mb-1 hover:underline">PCACS Online Library</p>
            <p className="text-sm mb-1 hover:underline">Online Railway Concession</p>
            <p className="text-sm mb-1 hover:underline">Online Student Portal</p>
          </div>
  
          {/* Social Media Links */}
          <div>
            <h3 className="font-bold mb-2 border-b border-gray-600 text-lg">Follow Us</h3>
            <ul className="space-y-1">
              <li className="text-sm mb-1 hover:underline">Facebook</li>
              <li className="text-sm mb-1 hover:underline">Twitter</li>
              <li className="text-sm mb-1 hover:underline">YouTube</li>
              <li className="text-sm mb-1 hover:underline">LinkedIn</li>
              <li className="text-sm mb-1 hover:underline">Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#18232D] text-gray-400 text-sm text-center py-6 w-full">
        Copyright © MES | PCACS Designed and Developed by Vignesh Esakkiappan |
        <a href="#" className="text-gray-500 ml-2">Refund / Cancellation Policy</a> | 
        <a href="#" className="text-gray-500 ml-2">Privacy Policy</a> | 
        <a href="#" className="text-gray-500 ml-2">Terms and Conditions</a>
        <br />
        CAMPUSES: PANVEL | NEW PANVEL | KHANDA | RASAYANI | GORAI | CHEMBUR
      </div>
    </footer>
  );
};

export default Footer;