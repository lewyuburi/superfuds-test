const get = async () => {
  const getProductRespone = await fetch('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')

  if (getProductRespone.status === 200) {
    return getProductRespone.json()
  } else {
    throw new Error('Error getting product list')
  }
}

const ProductService = {
  get
}

export default ProductService;
