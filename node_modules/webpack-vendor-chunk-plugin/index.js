function VendorChunkPlugin(chunkNames) {
  if (typeof chunkNames === 'string') {
    chunkNames = [chunkNames];
  }
  this.chunkNames = chunkNames;
}

VendorChunkPlugin.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('optimize-chunks', function(chunks) {
      var vendorChunks = chunks.filter(function(chunk) {
        return self.chunkNames.indexOf(chunk.name) !== -1;
      });
      vendorChunks.forEach(function(chunk) {
        // The module 0 of a chunk is required instantly and independently
        // upon loading the chunk.
        // In the case of a vendor chunk created via an entry and
        // CommonsChunkPlugin, all modules contained in the entry will be
        // executed sequentially within the module 0.
        // See http://webpack.github.io/docs/code-splitting.html#entry-chunk
        chunk.modules[0].removeChunk(chunk);
      });
    });
  });
};

module.exports = VendorChunkPlugin;
