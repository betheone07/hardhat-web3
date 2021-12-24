import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const C = await ethers.getContractFactory("Counter");
    const counter = await C.deploy();
    await counter.count();
    console.log("Counter" , await counter.getCounter());
}

deploy();