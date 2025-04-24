import chalk from 'chalk';

console.clear();

const gradient = chalk.hex('#4B1757');  // top color
const bright = chalk.hex('#974CA7');    // bottom color

console.log(`
${bright('╔' + '═'.repeat(50) + '╗')}
${bright('║')} ${chalk.bold.white('🚀 Welcome to')} ${gradient.bold('DevEdge Solution CLI')} ${bright(' '.repeat(8))}${bright('║')}
${bright('║')} ${chalk.cyan('Your gateway to full-stack magic')} ${bright(' '.repeat(13))}${bright('║')}
${bright('║')} ${chalk.gray('Crafted with ❤️ by Rahul Gurav')} ${bright(' '.repeat(17))}${bright('║')}
${bright('╚' + '═'.repeat(50) + '╝')}
`);

console.log(`
${chalk.greenBright('💡 Tip:')} Use ${chalk.bold.yellow('npm run dev')} to start the development server.
`);
