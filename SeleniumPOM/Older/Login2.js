// loginTest.js
import { assert } from "chai";
import LoginDetails from "./PoLogin.js";

async function loginCall() {
    const dashboard = await LoginDetails.login();
    assert.exists(dashboard, "Dashboard element should exist");

    const text = await dashboard.getText();
    assert.strictEqual(text, "Dashboard", "Dashboard text should be 'Dashboard'");
}

loginCall();
