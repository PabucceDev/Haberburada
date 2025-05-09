import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        giris: 'giris.html',
        cikis: 'cikis.html',
        gundem: 'gundem.html',
        ekonomi: 'ekonomi.html',
        spor: 'spor.html',
        magazin: 'magazin.html',
        haber: 'haber.html',

        admin_index: 'admin/index.html',
        admin_haberDuzenle: 'admin/haber-duzenle.html',
        admin_haberSil: 'admin/haber-sil.html',
        admin_haberler: 'admin/haberler.html',
        admin_yeniHaber: 'admin/yeni-haber.html',
      }
    }
  }
});
