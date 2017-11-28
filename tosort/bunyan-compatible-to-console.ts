
const log = console.log.bind(console)
const info = console.info.bind(console)
const warn = console.warn.bind(console)
const error = console.error.bind(console)



function bunyan_args_harmonizer(arg1: any, ...other_args: any[]): any[] {
	if (arg1 instanceof Error) {
		const err = arg1
		return other_args.concat({err})
	}

	if (typeof arg1 !== 'string') {
		const details = arg1
		return other_args.concat(details)
	}

	// no change
	return [arg1].concat(...other_args)
}



export {
}


fatal (60)


error (50)

warn (40)

info (30)


debug (20)
trace (10)
