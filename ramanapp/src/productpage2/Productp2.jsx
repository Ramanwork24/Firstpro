import React from 'react';
import './productp2.css';
import producti from './assets/product1.jpg';
import sideimge from './assets/sideimg.jpg';

function Productp2() {
    let arr=[
        {
        Image:"",
        productname:"product Name",
        category:"category",
        size:"a4"
    },
    {
        Image:"",
        productname:"product 2",
        category:"category",
        size:"a4"
    },
    {
        Image:"",
        productname:"product1",
        category:"category",
        size:"a4"
    },
    {
        Image:"",
        productname:"product1",
        category:"category",
        size:"a4"
    },
    {
        Image:"",
        productname:"product1",
        category:"category",
        size:"a4"
    },
    {
        Image:"",
        productname:"product1",
        category:"category",
        size:"a4"
    },
    {
        Image:"",
        productname:"product1",
        category:"category",
        size:"a4"
    },
    {
        Image:"",
        productname:"product1",
        category:"category",
        size:"a4"
    },
    {
        Image:"",
        productname:"product1",
        category:"category",
        size:"a4"
    },
    {
        Image:"",
        productname:"product1",
        category:"category",
        size:"a4"
    },

]

let add=[
    {
        image:sideimge,
        title:"Special Offer for Today",
        description:"10% Off for New Tesla Model S",
        alt:"sidei"
    }
    ,{
        image:sideimge,
        title:"Special Offer for Today",
        description:"10% Off for New Tesla Model S",
        alt:"sidei"
    }
]
  return (
    <div>
      <div className="productp2-container">
        <div className="p2-head">
          <div className="p2-head-text">
            <h4>Sub title</h4>
            <h1>Explore More</h1>
          </div>
        </div>
        <div class="p2-section2">
          <div class='p2-section2-content'>
            <div class="p2-serachbar">
              <input type="text" Name="Search" placeholder='Pepe Cones' id="p2-search" />
              <button id="search-bt">Search</button>
            </div>
            <div class="p2-data">
              <h5 id="all">All (100)</h5>
              <h5 id="new">New (40)</h5>
              <h5 id="used">Used (60)</h5>
            </div>
          </div>
        </div>
        <hr id="line"></hr>
        <div class="p2-section3">
          <h2>PePe Cones</h2>
          <div class="p2-section3-row2">
            <p>We've found 20 result of PePe Cones</p>
            <div className="sort">
            <h5>Sort by</h5>
              <select>
                <option>Newest</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
              </select>
              </div>
          </div>
        </div>
        <div className="p2-section4">
        <div className="p2-section4-row1">
          {arr.map((e, index) => (
            <div class="p2-product-box" key={index}>
              <div class="product-img">
                <img src={producti} alt={e.productname} />
                <div class="product-text-box">
                  <div class="product-text">
                    <h3>{e.productname}</h3>
                    <p>{e.category} | {e.size}</p>
                  </div>
                  <div class="view-detail">
                    <button>View Detail</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p2-sideimg-container">
        {add.map((e) => {
  return (
    <div className="p2-section4-row2" key={e.id}>
      <img src={e.image} alt={e.alt} />
      <div className="text-container">
        <h3>{e.title}</h3>
        <h5>{e.description}</h5>
        <button>Details</button>
      </div>
    </div>
  );
})}

         
           

         



  
  </div>       
 
</div>
        </div>
      </div>

      
    
  )
}

export default Productp2
