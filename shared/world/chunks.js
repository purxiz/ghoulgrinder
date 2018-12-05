class Chunk {
  constructor() {
    this.nodes = []
  }
}

chunk_list = {}


exports.addNode = (cId, node) => {
  let k = '' + cId
  if(!(k in chunk_list)){
    chunk_list[k] = new Chunk
  }
  chunk_list[k].nodes.push(node)
}