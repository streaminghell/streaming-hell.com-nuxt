<template>
  <footer>
    <div class="container">
      <div class="copyright">
        Made with ❤️ in
        <a class="copyright-link" href="https://robotmafia.io" target="_blank"
          >robotmafia</a
        >. All rights reserved.
        <br class="br" />
        All rights to logos, trademarks, belong to their respective owners.
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--n500);
  padding: 0 20px;
  box-shadow: 0 1px 10px rgba(9, 30, 66, 0.16), 0 1px 0 rgba(9, 30, 66, 0.04);
  z-index: 101;
  box-sizing: border-box;

  @media (max-width: 670px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}

.copyright {
  color: #86868b;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
}

.copyright-link {
  color: #86868b;
  border-bottom: 1px solid #d6d6de;
  transition: border-bottom-color 0.3s;
  text-decoration: none;

  &:hover {
    color: #86868b;
    text-decoration: none;
    border-bottom-color: transparent;
  }
}

.br {
  @media (max-width: 380px) {
    display: none;
  }
}
</style>
