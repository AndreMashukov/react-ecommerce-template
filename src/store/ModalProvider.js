import ModalContext from './ModalContext';
import React from 'react';

function ModalReducer(state, action) {
    // For showing notices and modals
    switch (action.type) {
        case 'modal':
            window.jQuery('#main-modal').modal('show');
            return { title: action.title, message: action.message, buttons: action.buttons };
            break;
    }
}

export default ({children}) => {

    const [state, reducer] = React.useReducer(ModalReducer, { buttons: [], title:'', message: ''});

    return (<ModalContext.Provider value={ reducer }>
        <div class="modal" id="main-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">{ state.title }</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <p>{ state.message }</p>
                    </div>
                    <div class="modal-footer">
                        { state.buttons === null ? (<button className='btn btn-secondary' data-dismiss='modal'>Ok</button>) : state.buttons.map((button) => button) }
                    </div>
                </div>
            </div>
        </div>
    {children}</ModalContext.Provider>)
}