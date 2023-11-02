import React from "react";
import PortfolioBox from "./PortfolioBox";

const port = [
    {title: "bizbazaar",
    description: "BizBazaar is an e-commerce site that allows users to buy a wide variety of products. Staff can add new products and update existing ones. Customers can view detailed product information and save products to a wishlist for later. Customers can select the quantity of a product to add to their cart and edit the contents of their cart before checkout. Customers can also view their order history.",
    link: "https://github.com/bizbazaar"},
    {title: "SpaceEco",
    description: "SpaceEco is an intergalactic, after-market e-commerce site that allows users to buy and sell items associated with interstellar life. Users are able to sign up to create an account and are redirected to their profile. Clicking on the Catalog link at the top of the page allows users to view the products. From there, users are able to view products and click on a specific products to view the product in greater detail. From there we can buy the selected product. Products can be anything from an arce on Mars to stars lightyears from the Milky Way.",
    link: "https://github.com/Revature-SpaceEco"},
    {title: "DnDBattleApp-Frontend",
    description: "DnDBattleApp is a web game where players can choose from among a selection of budding adventurers to face waves of enemies provided by the D&D 5e API. Players receive rewards for each playthrough and the playthrough's data is saved.",
    link: "https://github.com/220725-JavaReact/SpicyJello-DnDBattleApp-Frontend"},
    {title: "DnDBattleApp-Backend",
    description: "DnDBattleApp is a web game where players can choose from among a selection of budding adventurers to face waves of enemies provided by the D&D 5e API. Players receive rewards for each playthrough and the playthrough's data is saved.",
    link: "https://github.com/220725-JavaReact/SpicyJello-DnDBattleApp-Backend"},
    {title: "Spring-People-List",
    description: "Spring People List is a Java Spring Boot application that creates a list of people with some generic details. The list is stored within a SQL database.",
    link: "https://github.com/akalink/spring-people-list"}
]

function Portfolio(){
    return (
        <div id="demo">
            {port.map((port) => {
            return <PortfolioBox title={port.title} link={port.link} description={port.description}/>})
            }
        </div>
    )
}
export default Portfolio;