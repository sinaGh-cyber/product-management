import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProductsAPI, removeProductAPI } from 'services/api';
import { RemoveModal } from '../components/productlist/RemoveModal';

const ProductsList = () => {
  const [allProductsArray, setAllProductsArray] = useState(undefined);
  const [AlertConfig, setAlertConfig] = useState({
    showAlert: false,
    product: false,
  });
  const [deleteReqSuccessesWatcher, setDeleteReqSuccessesWatcher] = useState(
    {}
  );
  useEffect(() => {
    getAllProductsAPI().then((res) => {
      setAllProductsArray(res.data);
    });
  }, [deleteReqSuccessesWatcher]);

  return (
    <div className="container">
      <div className="card">
        {AlertConfig.showAlert && (
          <RemoveModal
            onClose={(e) => {
              AlertConfig.showAlert = false;
              setAlertConfig({ ...AlertConfig });
            }}
            onConfirm={(e) => {
              removeProductAPI(AlertConfig.product.id).then((res) => {
                if (JSON.stringify(res.status)[0] === '2') {
                  AlertConfig.showAlert = false;
                  setAlertConfig({ ...AlertConfig });
                  setDeleteReqSuccessesWatcher({
                    ...deleteReqSuccessesWatcher,
                  });
                }
              });
            }}
            product={allProductsArray[0]}
          />
        )}

        <div className="card-body">
          {!!allProductsArray?.length && (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'culm',
                  justifyContent: 'space-evenly',
                  marginLeft: '20vW',
                }}
              >
                <div>نام محصول</div>
                <div>قیمت</div>
                <div>دسته بندی</div>
                <div>موجودی</div>
              </div>
              <ul>
                {allProductsArray.map((item, idx) => {
                  return (
                    <li
                      style={{
                        display: 'flex',
                        flexDirection: 'culm',
                        justifyContent: 'space-around',
                        margin: '8px 0',
                      }}
                      key={item.id}
                    >
                      <div>{item.name}</div>
                      <div>{item.price}</div>
                      <div>{item.category}</div>
                      <div>{item.availability}</div>
                      <button
                        onClick={(e) => {
                          AlertConfig.showAlert = true;
                          AlertConfig.product = item;
                          setAlertConfig({ ...AlertConfig });
                        }}
                      >
                        حذف
                      </button>
                      <Link to={`products/edit/${item.id}`}>ویرایش</Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          {!allProductsArray?.length && <div>محصولی یافت نشد!"</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
