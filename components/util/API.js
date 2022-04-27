/**
 * API calls
 */

const API = {
  async getAccounts() {
    const response = await fetch(`https://hiring.oraculi.io/v1/accounts`);
    const responseJson = await response.json();
    return responseJson;
  },

  async getAccountStats(accountParam) {
    if (!accountParam) {
      return false;
    }
    const response = await fetch(
      `https://hiring.oraculi.io/v1/accounts/${accountParam}`
    );
    const responseJson = await response.json();
    return responseJson;
  },

  async getAccountCostsHistory(accountParam) {
    if (!accountParam) {
      return false;
    }
    const response = await fetch(
      `https://hiring.oraculi.io/v1/accounts/${accountParam}/history`
    );
    const responseJson = await response.json();
    return responseJson;
  }
};

export default API;
