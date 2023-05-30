import React from 'react'

function Modal() {
  return (
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                  <img src="..." className="rounded me-2" alt="..." />
                      <strong className="me-auto">Goal</strong>
                      <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div className="toast-body">
                  Goal is create successfully!.
              </div>
          </div>
      </div>
  )
}

export default Modal