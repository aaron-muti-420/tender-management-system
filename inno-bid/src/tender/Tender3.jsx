import React from 'react'
import "./tender.css"
import { Link } from 'react-router-dom'
import fishing from '../assets/fishing.jpg'

export default function Tender() {
  return (
    <div className='singleTender' >
      <img 
        className="tenderImage"
        src={ fishing } 
        alt="insurance"/>

        {/* Info on Person/Company Issueing the tender */}
      <Link to="/Fish-Tender" >
        <span className="tenderName">
          Request of Marine Life Capture Services
        </span>
      </Link>
      {/* Area, Issuer, Bid and Save */}

      <div className="tenderInfo">
        <div className="tenderCategories">
          <span className="tenderCategory">
            Sector : Wildlife and Tourism
          </span>
          <br/>
          <span className="tenderType">
            Area : Khomas Region
          </span>
          <br/>
        <span className="tenderType">
            Issuer : Ministry of Tourism
          </span>
          <br/>
        <span className="tenderType">
            Dates : 01 Jan 2023 - 01 April 2023
          </span>
        </div>
        {/* The details about the contract */}
      
        <p className="tenderDescription">
        Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
        Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.

        Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
        Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.

        Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
        Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
        Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.


        </p>


     


      </div>

      
    </div>
  )
}
