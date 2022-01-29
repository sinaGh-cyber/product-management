import { useEffect, useRef } from 'react'
import { Modal } from 'bootstrap'
import PropTypes from 'prop-types'

const RemoveModal = ({ product, onClose, onConfirm }) => {
  const modalObjectRef = useRef()
  const modalRef = useRef()

  const handleConfirm = (event) => {
    onConfirm?.(event)
  }

  useEffect(() => {
    modalObjectRef.current = new Modal(modalRef.current, {})

    onClose && modalRef.current.addEventListener('hidden.bs.modal', onClose)
  }, [])

  useEffect(() => {
    const modal = modalObjectRef.current
    modal.show()

    return () => modal.hide()
  }, [])

  return (
    <div className="modal" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">حذف کردن {product.name}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <p>آیا از انجام این عمل مطمئن هستید!؟</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              بیخیال
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleConfirm}
            >
              تایید
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

RemoveModal.propTypes = {
  product: PropTypes.object.isRequired,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
}

export { RemoveModal }
