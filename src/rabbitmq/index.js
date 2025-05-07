import { consumeMessages as consumeCustomer } from "./customer_consumer.js";
import { barangMasterAssigned, barangMasterSKUAssigned } from "./barangSKU_consumer.js";

const consumersApp = async () => {
    await consumeCustomer();
    await barangMasterAssigned();
    await barangMasterSKUAssigned();
    console.log('Consumer is running barangSKU');
}

export { consumersApp };
