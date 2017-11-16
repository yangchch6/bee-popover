import React from 'react';
import isRequiredForA11y from 'tinper-bee-core/lib/isRequiredForA11y';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const propTypes = {
    /**
     * An html id attribute, necessary for accessibility
     * @type {string}
     * @required
     */
    id: isRequiredForA11y(PropTypes.oneOfType([
        PropTypes.string, PropTypes.number,
    ])),

    /**
     * Sets the direction the Popover is positioned towards.
     */
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left','topLeft', 'rightTop', 'bottomLeft', 'leftTop','topRight', 'rightBottom', 'bottomRight', 'leftBottom']),

    /**
     * The "top" position value for the Popover.
     */
    positionTop: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
    /**
     * The "left" position value for the Popover.
     */
    positionLeft: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),

    /**
     * The "top" position value for the Popover arrow.
     */
    arrowOffsetTop: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
    /**
     * The "left" position value for the Popover arrow.
     */
    arrowOffsetLeft: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
};

const defaultProps = {
    placement: 'right',
    clsPrefix: 'u-popover'
};

const PLACECLASS = {
    right: 'right',
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    rightTop: 'right-top',
    rightBottom: 'right-bottom',
    leftTop: 'left-top',
    leftBottom: 'left-bottom',
    topRight: 'top-right',
    topLeft: 'top-left',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right'
};

class Content extends React.Component {
    render() {
        const {
            placement,
            positionTop,
            positionLeft,
            arrowOffsetTop,
            arrowOffsetLeft,
            clsPrefix,
            className,
            style,
            id,
            children,
            trigger,
            ...others
        } = this.props;

        const classes = {
            [`${clsPrefix}`]: true,
            [PLACECLASS[placement]]: true,
        };

        const outerStyle = {
            display: 'block',
            top: positionTop,
            left: positionLeft,
            ...style,
        };

        const arrowStyle = {
            top: arrowOffsetTop,
            left: arrowOffsetLeft,
        };

        return (
            <div
                role="tooltip"
                id={id}
                className={classnames(className, classes)}
                style={outerStyle}
                {...others}
            >
                <div className="arrow" style={arrowStyle}/>

                <div className={classnames(`${clsPrefix}-content`)}>
                    { children }
                </div>
            </div>
        );
    }
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
