import { Modal } from 'antd'
import React, { useImperativeHandle, useState } from 'react'

const ApplicationModal = React.forwardRef((props, ref) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    useImperativeHandle(ref, () => ({
        onOpen,
        onClose
    }));

    const onOpen = () => setIsModalVisible(true);
    const onClose = () => setIsModalVisible(false);

    return (
        <Modal
            className={props.className}
            title={props.title} 
            open={isModalVisible} 
            onCancel={onClose}
            maskClosable={props.maskClosable}
            footer={null}
        >
            {props.content}
        </Modal>
    )
})

export default ApplicationModal