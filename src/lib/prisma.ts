// import { PrismaClient } from "@prisma/client";

import { PrismaClient } from '@/generated/prisma';

// import { PrismaClient } from "@prisma/client/edge";

declare global {
	// allow global `var` to be reused
	var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
	global.prisma = prisma;
}

export default prisma;
