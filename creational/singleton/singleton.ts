import { DBConnection } from "./dbConnection";

const connection1 = DBConnection.instance;
const connection2 = DBConnection.instance;

console.log("\n--- Singleton Instance Check ---");

if (connection1 === connection2) {
  console.log("Instances are the same ✅");
} else {
  console.log("Instances are different ❌");
}

console.log("\n--- Connection Status ---");
console.log("Initial connection 1 status:", connection1.isConnectedStatus());
console.log("Initial connection 2 status:", connection2.isConnectedStatus());

console.log("\n--- Connecting via connection1 ---");

connection1.connect();
console.log(
  "Connection 1 status after connect():",
  connection1.isConnectedStatus()
);
console.log(
  "Connection 2 status after connect():",
  connection2.isConnectedStatus()
);

console.log("\n--- Disconnecting via connection2 ---");

connection2.disconnect();
console.log(
  "Connection 1 status after disconnect():",
  connection1.isConnectedStatus()
);
console.log(
  "Connection 2 status after disconnect():",
  connection2.isConnectedStatus()
);
