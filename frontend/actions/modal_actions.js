export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {

  return {
    type: OPEN_MODAL,
    modal: modal.modal,
    post: modal.post,
    comment: modal.comment
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
