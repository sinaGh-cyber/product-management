import React, { useEffect, useRef, useState } from 'react';
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

  const LinkToClick = useRef(null);

  return (
    <>
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
      )}{' '}
      <div className="container">
        <div className="card">
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

                {allProductsArray.map((item, idx) => {
                  return (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        margin: '8px 0',
                      }}
                      key={item.id}
                    >
                      <div>{item.name}</div>
                      <div>{item.price}</div>
                      <div>{item.category}</div>
                      <div>{item.availability}</div>

                      <div className="buttonGroup">
                        {' '}
                        <button
                          style={{ margin: '0', marginLeft: '2px' }}
                          onClick={(e) => {
                            AlertConfig.showAlert = true;
                            AlertConfig.product = item;
                            setAlertConfig({ ...AlertConfig });
                          }}
                        >
                          حذف
                        </button>
                        <Link role={'button'} to={`products/${item.id}/edit`}>
                          <button>ویرایش</button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {!allProductsArray?.length && <div>محصولی یافت نشد!</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
