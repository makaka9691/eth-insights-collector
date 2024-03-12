const Web3WondersNFTGatherer = require('web3-nft-gatherer');
const { rarityCalculator } = require('nft-rarity-calculator');
const { marketTrendAnalyzer } = require('market-trend-analyzer');

class EtherealInsightsCollector extends Web3WondersNFTGatherer {
    constructor(infuraUrl) {
        super(infuraUrl);
    }

    async analyzeCollectionRarity(contractAddress) {
        const collection = await this.fetchNFTMetadata(contractAddress);
        return rarityCalculator(collection);
    }

    async analyzeMarketTrends(contractAddress) {
        const collection = await this.fetchNFTMetadata(contractAddress);
        return marketTrendAnalyzer(collection);
    }
}

module.exports = EtherealInsightsCollector;
