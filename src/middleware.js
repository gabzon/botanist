export function onRequest({ request, redirect }, next) {
  const url = new URL(request.url);
  
  // If the path is exactly "/", redirect to the default locale
  if (url.pathname === '/') {
    return redirect('/en');
  }
  
  return next();
}
