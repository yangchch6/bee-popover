/**
 *
 * @title 气泡卡片默认样式
 * @description 支持12个位置
 */

import {Component} from 'react';
import Popover from '../../src';
import Button from 'bee-button';


export default class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    render() {
        let content = (
            <div>
                <p>请确认您的包裹已签收！</p>
                <div>
                    <Button
                        colors="primary"
                        onClick={ this.handleClose }
                        size="sm">
                        关闭
                    </Button>
                </div>
            </div>
        )
        return (
            <div>
                <Popover
                    placement="right"
                    overlay={content}
                    trigger="click"
                    show={this.state.show}
                >
                    <Button
                        colors="primary"
                        >确认按钮</Button>
                </Popover>
            </div>
        )
    }
}
