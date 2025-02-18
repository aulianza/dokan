import cookie from 'cookie';
import { GetServerSidePropsContext, GetServerSidePropsResult, Redirect } from 'next';

export function redirectIfAuthenticated(ctx: GetServerSidePropsContext): { redirect: Redirect } | null {
  const req = ctx.req;

  if (req) {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token: string | undefined = cookies.token;

    if (token) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
      };
    }
  }

  return null;
}

export const requireAuth = async (
  context: GetServerSidePropsContext,
  callback?: (
    context: GetServerSidePropsContext,
  ) => Promise<GetServerSidePropsResult<Record<string, unknown>>>,
): Promise<GetServerSidePropsResult<Record<string, unknown>>> => {
  const cookies = cookie.parse(context.req.headers.cookie || '');
  const token: string | undefined = cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  if (callback) {
    return callback(context);
  }

  return { props: {} };
};
