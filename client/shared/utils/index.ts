import axios from 'axios';

export const formatPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
});

export const copyToClipboard = (string: string) => {
    let textarea = null;
    let result = null;

    try {
        textarea = document.createElement('textarea');
        textarea.setAttribute('readonly', 'true');
        textarea.setAttribute('contenteditable', 'true');
        textarea.style.position = 'fixed'; // prevent scroll from jumping to the bottom when focus is set.
        textarea.value = string;

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        const range = document.createRange();
        range.selectNodeContents(textarea);

        const sel = window.getSelection();
        sel!.removeAllRanges();
        sel!.addRange(range);

        textarea.setSelectionRange(0, textarea.value.length);
        result = document.execCommand('copy');
    } catch (err) {
        console.error(err);
        result = null;
    } finally {
        document.body.removeChild(textarea!);
    }

    // manual copy fallback using prompt
    if (!result) {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const copyHotkey = isMac ? '⌘C' : 'CTRL+C';
        result = prompt(`Press ${copyHotkey}`, string); // eslint-disable-line no-alert
        if (!result) {
            return false;
        }
    }
    return true;
};

export function parseCurrency(value: string) {
    // Remove the currency symbol and commas
    let numberString = value.replace(/[^0-9.-]+/g, '');
    // Convert the cleaned string to a number
    return parseFloat(numberString);
}

export function truncateText(text: string, wordLimit: number) {
    const words = text.split(/\s+/);

    if (words.length <= wordLimit) {
        return text;
    }

    return words.slice(0, wordLimit).join(' ') + '...';
}
