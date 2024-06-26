import React from 'react';

export const intlMock = {
    formatMessage: message => message.defaultMessage || message.message,
    formatDate: date => date,
};

export const FormattedDate = () => <div />;
FormattedDate.displayName = 'FormattedDate';

export const FormattedTime = () => <div />;
FormattedTime.displayName = 'FormattedTime';

export const FormattedMessage = () => <div />;
FormattedMessage.displayName = 'FormattedMessage';

export const RawIntlProvider = () => <div />;

RawIntlProvider.displayName = 'RawIntlProvider';
export const createIntl = () => intlMock;

export const defineMessages = messages => messages;

export const createIntlCache = () => {};

export const injectIntl = Component => {
    const WrapperComponent = props => {
        const injectedProps = { ...props, intl: intlMock };
        return <Component {...{ ...injectedProps }} />;
    };
    WrapperComponent.displayName = Component.displayName || Component.name || 'Component';
    return WrapperComponent;
};

export const useIntl = () => intlMock;
