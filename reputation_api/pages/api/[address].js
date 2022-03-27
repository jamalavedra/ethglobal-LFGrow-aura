import { isBlockchainAddress, AddressToEns } from "../../utils/stringUtils";

const handler = async (req, res) => {
  try {
    let { address } = req.query;

    if (isBlockchainAddress(address) === true) {
      let resp = [];
      let resp_ens = await AddressToEns(address);
      if (resp_ens !== false) {
        resp.push(resp_ens);
      }
      if (resp.length > 0) {
        return res.status(200).json({ ...resp[0], success: true });
      } else {
        return res.status(200).json({});
      }
    } else {
      return res.status(400).json({
        success: false,
        error: "Invalid address.",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export default handler;
