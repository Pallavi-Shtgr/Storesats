
====================================

This API server fetches real-time cryptocurrency data from the CoinGecko API 
and stores it in a MongoDB database. It currently supports three cryptocurrencies:
- Bitcoin (bitcoin)
- Ethereum (ethereum)
- Polygon (matic-network)

------------------------------------------------
📁 Project Structure:
------------------------------------------------
api-server/
├── models/
│   └── CryptoStat.js       # Mongoose model
├── services/
│   └── storeCryptoStats.js # Fetch & store function
├── server.js               # Main Express server
├── package.json            # Dependencies

------------------------------------------------
⚙️ Technologies Used:
------------------------------------------------
- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios (for API requests)
- node-cron (for scheduling tasks)

------------------------------------------------
🚀 Setup Instructions:
------------------------------------------------
1. Clone this repository:
   git clone <your-repo-url>

2. Navigate to the project folder:
   cd api-server

3. Install dependencies:
   npm install

4. Configure MongoDB connection:
   - By default, it uses: mongodb://localhost:27017/crypto-db
   - Update it in server.js if needed.

5. Start the server:
   node server.js

------------------------------------------------
📌 Features:
------------------------------------------------
- Fetches data from CoinGecko every hour using node-cron
- Stores:
   - Current price in USD
   - Market cap in USD
   - 24-hour percentage change
- Saves data in MongoDB with a timestamp

------------------------------------------------
🛠 Example API Used:
------------------------------------------------
GET https://api.coingecko.com/api/v3/simple/price

Parameters:
  ids=bitcoin,ethereum,matic-network
  vs_currencies=usd
  include_market_cap=true
  include_24hr_change=true

------------------------------------------------
⏰ Cron Schedule:
------------------------------------------------
Runs storeCryptoStats() every hour:
  0 * * * *

You can modify this in `server.js` as per your requirement.
"""

# Save to file
readme_path = "/mnt/data/README.txt"
with open(readme_path, "w") as file:
    file.write(readme_content)

readme_path
