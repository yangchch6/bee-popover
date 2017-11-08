
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 气泡卡片默认样式","code":"/**\n *\n * @title 气泡卡片默认样式\n * @description 支持12个位置\n */\n\nimport {Component} from 'react';\nimport Popover from 'bee-popover';\nimport Button from 'bee-button';\n\n\n\n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        let content = (\n            <div>\n                <h3>消息</h3>\n                <ul>\n                    <li>您的服务器已宕机，请处理。</li>\n                    <li>您的手机已停机，请续费。</li>\n                    <li>你的工资已到账，请查收。</li>\n                </ul>\n            </div>\n        )\n        return (\n            <div style={{position: 'relative', height: 320, marginTop: 100, marginLeft: 250}}>\n                <Popover\n                    placement=\"leftTop\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 5,\n                            left: 0\n                        }}>左上</Button>\n                </Popover>\n                <Popover\n                    placement=\"left\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 55,\n                            left: 0\n                        }}>左\n                    </Button>\n                </Popover>\n                <Popover\n                    placement=\"leftBottom\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 110,\n                            left: 0\n                        }}>左下</Button>\n                </Popover>\n                <Popover\n                    placement=\"topLeft\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 0,\n                            left: 100\n                        }}>上左\n                    </Button>\n                </Popover>\n                <Popover\n                    placement=\"top\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 0,\n                            left: 200\n                        }}>上\n                    </Button>\n                </Popover>\n                <Popover\n                    placement=\"topRight\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 0,\n                            left: 300\n                        }}>\n                        上右\n                    </Button>\n                </Popover>\n                <Popover\n                    placement=\"rightTop\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 5,\n                            left: 400\n                        }}>右上\n                    </Button>\n                </Popover>\n                <Popover\n                    placement=\"right\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 55,\n                            left: 400\n                        }}>右</Button>\n                </Popover>\n                <Popover\n                    placement=\"rightBottom\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 110,\n                            left: 400\n                        }}>右下</Button>\n                </Popover>\n                <Popover\n                    placement=\"bottomLeft\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 115,\n                            left: 100\n                        }}>下左</Button>\n                </Popover>\n                <Popover\n                    placement=\"bottom\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 115,\n                            left: 200\n                        }}>上</Button>\n                </Popover>\n                <Popover\n                    placement=\"bottomRight\"\n                    content={content}\n                    trigger=\"click\"\n                >\n                    <Button\n                        colors=\"primary\"\n                        style={{\n                            position: 'absolute',\n                            top: 115,\n                            left: 300\n                        }}>下右</Button>\n                </Popover>\n            </div>\n        )\n    }\n}\n","desc":" 支持12个位置"},{"example":<Demo2 />,"title":" 气泡卡片默认样式","code":"/**\r\n *\r\n * @title 气泡卡片默认样式\r\n * @description 支持12个位置\r\n */\r\n\r\nimport {Component} from 'react';\r\nimport Popover from 'bee-popover';\r\nimport Button from 'bee-button';\r\n\r\n\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            show: false\r\n        }\r\n    }\r\n\r\n    handleClose = () => {\r\n        this.setState({\r\n            show: false\r\n        })\r\n    }\r\n\r\n    render() {\r\n        let content = (\r\n            <div>\r\n                <p>请确认您的包裹已签收！</p>\r\n                <div>\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        onClick={ this.handleClose }\r\n                        size=\"sm\">\r\n                        关闭\r\n                    </Button>\r\n                </div>\r\n            </div>\r\n        )\r\n        return (\r\n            <div>\r\n                <Popover\r\n                    placement=\"right\"\r\n                    overlay={content}\r\n                    trigger=\"click\"\r\n                    show={this.state.show}\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        >确认按钮</Button>\r\n                </Popover>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 支持12个位置"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );

        
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0, borderColor: "transparent"}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
