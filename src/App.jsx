import { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>

    <div>Test</div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6">
              <h2>產品列表</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>產品名稱</th>
                    <th>原價</th>
                    <th>售價</th>
                    <th>是否啟用</th>
                    <th>查看細節</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {products.map((item) => (
                    <tr key={}>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>
                        {}
                      </td>
                      <td>
                        <button className="btn btn-primary" onClick={}>查看細節</button>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <h2>單一產品細節</h2>
              {/* {tempProduct ? (
                <div className="card mb-3">
                  <img src={} className="card-img-top primary-image" alt="主圖" />
                  <div className="card-body">
                    <h5 className="card-title">
                      {}
                      <span className="badge bg-primary ms-2">{}</span>
                    </h5>
                    <p className="card-text">商品描述：{}</p>
                    <p className="card-text">商品內容：{}</p>
                    <div className="d-flex">
                      <p className="card-text text-secondary"><del>{}</del></p>
                      元 / {} 元
                    </div>
                    <h5 className="mt-3">更多圖片：</h5>
                    <div className="d-flex flex-wrap">
                      {}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-secondary">請選擇一個商品查看</p>
              )} */}
            </div>
          </div>
        </div>
    </>
  )
}

export default App
