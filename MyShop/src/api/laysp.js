const laydssanpham = (idType, page) => {
    return fetch(`http://192.168.43.28/app/product_by_type.php?id_type=${idType}&page=${page}`)
    .then(res => res.json());
}

export default laydssanpham;